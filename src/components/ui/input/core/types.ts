export interface InputProps {
  /** 输入框的值 */
  modelValue?: string;
  /** 占位符文本 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readonly?: boolean;
  /** 输入框类型 */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  /** 是否必填 */
  required?: boolean;
  /** 最小长度 */
  minLength?: number;
  /** 最大长度 */
  maxLength?: number;
  /** 输入框名称 */
  name?: string;
  /** 自动完成 */
  autocomplete?: string;
  /** 自定义类名 */
  class?: string;
  /** 输入事件 */
  onInput?: (event: Event) => void;
  /** 聚焦事件 */
  onFocus?: (event: FocusEvent) => void;
  /** 失焦事件 */
  onBlur?: (event: FocusEvent) => void;
  /** 回车事件 */
  onEnter?: (event: KeyboardEvent) => void;
  /** 清除事件 */
  onClear?: () => void;
}

export interface UseInputReturn {
  /** 输入框的值 */
  value: import('vue').Ref<string>;
  /** 是否聚焦 */
  isFocused: import('vue').Ref<boolean>;
  /** 是否显示清除按钮 */
  showClear: import('vue').ComputedRef<boolean>;
  /** 是否禁用 */
  disabled: boolean;
  /** 是否只读 */
  readonly: boolean;
  /** 输入框类型 */
  type: string;
  /** 输入事件处理 */
  handleInput: (event: Event) => void;
  /** 聚焦事件处理 */
  handleFocus: (event: FocusEvent) => void;
  /** 失焦事件处理 */
  handleBlur: (event: FocusEvent) => void;
  /** 清除处理 */
  handleClear: () => void;
  /** ARIA 属性 */
  ariaAttrs: import('vue').ComputedRef<{
    'aria-disabled': boolean;
    'aria-readonly': boolean;
    'aria-required': boolean;
  }>;
}

