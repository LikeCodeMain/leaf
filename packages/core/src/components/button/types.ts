/**
 * Button 组件类型定义（框架无关）
 */

export interface ButtonProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  class?: string;
}

/**
 * Button 状态管理（框架无关）
 * 返回纯对象，不依赖任何框架的响应式系统
 */
export interface ButtonState {
  isPressed: boolean;
  isFocused: boolean;
  disabled: boolean;
  type: string;
}

export interface ButtonHandlers {
  onClick: (event: MouseEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
}

export interface ButtonAriaAttrs {
  'aria-disabled': boolean;
  'aria-pressed': boolean;
  role: string;
}

export interface UseButtonReturn {
  state: ButtonState;  // 状态对象（框架需要自己实现响应式）
  handlers: ButtonHandlers;  // 事件处理器
  ariaAttrs: () => ButtonAriaAttrs;  // ARIA 属性计算函数
}

