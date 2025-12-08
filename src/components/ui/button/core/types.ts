export interface ButtonProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  class?: string;
}

export interface UseButtonReturn {
  isPressed: import('vue').Ref<boolean>;
  isFocused: import('vue').Ref<boolean>;
  disabled: boolean;
  type: string;
  onClick: (event: MouseEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
  ariaAttrs: import('vue').ComputedRef<{
    'aria-disabled': boolean;
    'aria-pressed': boolean;
    role: string;
  }>;
}

