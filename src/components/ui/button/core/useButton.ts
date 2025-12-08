import { ref, computed, type Ref, type ComputedRef } from 'vue';
import type { ButtonProps, UseButtonReturn } from './types';

/**
 * Button 核心逻辑 Composable
 * 纯逻辑层，处理状态和事件，不涉及渲染
 */
export function useButton(props: ButtonProps = {}): UseButtonReturn {
  const {
    disabled = false,
    type = 'button',
    onClick,
    onFocus,
    onBlur
  } = props;

  // 状态管理
  const isPressed = ref(false);
  const isFocused = ref(false);

  // 事件处理
  const handleClick = (event: MouseEvent) => {
    if (disabled) return;
    isPressed.value = true;
    onClick?.(event);
    // 重置按下状态（可根据需求调整）
    setTimeout(() => {
      isPressed.value = false;
    }, 150);
  };

  const handleFocus = (event: FocusEvent) => {
    isFocused.value = true;
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent) => {
    isFocused.value = false;
    onBlur?.(event);
  };

  // 计算属性：ARIA 属性
  const ariaAttrs = computed(() => ({
    'aria-disabled': disabled,
    'aria-pressed': isPressed.value,
    role: 'button'
  }));

  // 返回状态和事件处理器
  return {
    // 状态
    isPressed,
    isFocused,
    disabled,
    type,
    
    // 事件处理器
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    
    // ARIA 属性
    ariaAttrs
  };
}

