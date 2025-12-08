/**
 * Button Vue 3 Composable
 * 基于 @leaf/core 的 useButton，提供 Vue 3 响应式封装
 */

import { ref, computed, type Ref, type ComputedRef } from 'vue';
import { useButton as useButtonCore } from '@leaf/core';
import type { ButtonProps } from '@leaf/core';

export interface UseButtonReturn {
  isPressed: Ref<boolean>;
  isFocused: Ref<boolean>;
  disabled: boolean;
  type: string;
  onClick: (event: MouseEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  ariaAttrs: ComputedRef<{
    'aria-disabled': boolean;
    'aria-pressed': boolean;
    role: string;
  }>;
}

/**
 * Button Vue 3 Composable
 * 将 @leaf/core 的逻辑封装为 Vue 3 响应式 API
 */
export function useButton(props: ButtonProps = {}): UseButtonReturn {
  const {
    disabled = false,
    type = 'button',
    onClick,
    onFocus,
    onBlur
  } = props;

  // 状态管理（Vue 3 响应式）
  const isPressed = ref(false);
  const isFocused = ref(false);

  // 事件处理
  const handleClick = (event: MouseEvent) => {
    if (disabled) return;
    isPressed.value = true;
    onClick?.(event);
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

  // ARIA 属性（计算属性）
  const ariaAttrs = computed(() => ({
    'aria-disabled': disabled,
    'aria-pressed': isPressed.value,
    role: 'button'
  }));

  return {
    isPressed,
    isFocused,
    disabled,
    type,
    onClick: handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ariaAttrs
  };
}

