/**
 * Button 核心逻辑（框架无关）
 * 纯 JavaScript/TypeScript 实现，不依赖任何框架
 * 
 * 注意：这个函数返回一个包含状态对象、事件处理器和 ARIA 属性的对象。
 * 状态对象是普通的 JavaScript 对象，框架需要自己实现响应式系统。
 * 
 * 对于 Vue 3，请使用 @leaf/vue3 包中的 useButton，它提供了响应式封装。
 */

import type { ButtonProps, UseButtonReturn, ButtonState, ButtonHandlers, ButtonAriaAttrs } from './types';

/**
 * Button 核心逻辑
 * 返回状态对象、事件处理器和 ARIA 属性计算函数
 * 
 * 框架需要：
 * 1. 使用自己的响应式系统包装 state 对象
 * 2. 在事件处理器中更新 state
 * 3. 使用 ariaAttrs 函数计算 ARIA 属性
 */
export function useButton(props: ButtonProps = {}): UseButtonReturn {
  const {
    disabled = false,
    type = 'button',
    onClick,
    onFocus,
    onBlur
  } = props;

  // 状态对象（框架需要自己实现响应式）
  const state: ButtonState = {
    isPressed: false,
    isFocused: false,
    disabled,
    type
  };

  // 事件处理
  const handleClick = (event: MouseEvent) => {
    if (disabled) return;
    state.isPressed = true;
    onClick?.(event);
    // 重置按下状态
    setTimeout(() => {
      state.isPressed = false;
    }, 150);
  };

  const handleFocus = (event: FocusEvent) => {
    state.isFocused = true;
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent) => {
    state.isFocused = false;
    onBlur?.(event);
  };

  // ARIA 属性计算函数
  const getAriaAttrs = (): ButtonAriaAttrs => ({
    'aria-disabled': state.disabled,
    'aria-pressed': state.isPressed,
    role: 'button'
  });

  return {
    state,
    handlers: {
      onClick: handleClick,
      onFocus: handleFocus,
      onBlur: handleBlur
    },
    ariaAttrs: getAriaAttrs  // 返回函数，框架可以包装为计算属性
  };
}

