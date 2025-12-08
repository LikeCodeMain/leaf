import { ref, computed } from 'vue';
import type { InputProps, UseInputReturn } from './types';

/**
 * Input 核心逻辑 Composable
 * 纯逻辑层，处理状态和事件，不涉及渲染
 */
export function useInput(props: InputProps = {}): UseInputReturn {
  const {
    modelValue = '',
    disabled = false,
    readonly = false,
    type = 'text',
    required = false,
    onInput,
    onFocus,
    onBlur,
    onEnter,
    onClear
  } = props;

  // 状态管理
  const value = ref(modelValue);
  const isFocused = ref(false);

  // 输入处理
  const handleInput = (event: Event) => {
    if (disabled || readonly) return;
    
    const target = event.target as HTMLInputElement;
    const newValue = target.value;
    
    value.value = newValue;
    onInput?.(event);
  };

  // 聚焦处理
  const handleFocus = (event: FocusEvent) => {
    if (disabled) return;
    isFocused.value = true;
    onFocus?.(event);
  };

  // 失焦处理
  const handleBlur = (event: FocusEvent) => {
    isFocused.value = false;
    onBlur?.(event);
  };

  // 清除处理
  const handleClear = () => {
    if (disabled || readonly) return;
    value.value = '';
    onClear?.();
  };

  // 计算属性：是否显示清除按钮
  const showClear = computed(() => {
    return !disabled && !readonly && value.value.length > 0;
  });

  // 计算属性：ARIA 属性
  const ariaAttrs = computed(() => ({
    'aria-disabled': disabled,
    'aria-readonly': readonly,
    'aria-required': required
  }));

  // 返回状态和事件处理器
  return {
    value,
    isFocused,
    showClear,
    disabled,
    readonly,
    type,
    handleInput,
    handleFocus,
    handleBlur,
    handleClear,
    ariaAttrs
  };
}

