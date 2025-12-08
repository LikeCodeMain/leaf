import { ref, type Ref } from 'vue';

export interface UseFocusOptions {
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

export interface UseFocusReturn {
  isFocused: Ref<boolean>;
  handleFocus: (event: FocusEvent) => void;
  handleBlur: (event: FocusEvent) => void;
}

/**
 * 焦点管理 Composable
 * 用于管理元素的焦点状态
 */
export function useFocus(options: UseFocusOptions = {}): UseFocusReturn {
  const { onFocus, onBlur } = options;

  const isFocused = ref(false);

  const handleFocus = (event: FocusEvent) => {
    isFocused.value = true;
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent) => {
    isFocused.value = false;
    onBlur?.(event);
  };

  return {
    isFocused,
    handleFocus,
    handleBlur
  };
}

