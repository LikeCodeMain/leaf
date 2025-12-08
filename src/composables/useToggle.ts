import { ref, type Ref } from 'vue';

export interface UseToggleOptions {
  defaultValue?: boolean;
  onToggle?: (value: boolean) => void;
}

export interface UseToggleReturn {
  isOpen: Ref<boolean>;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

/**
 * 开关逻辑 Composable
 * 用于需要打开/关闭状态的组件（如 Modal、Dropdown、Menu 等）
 */
export function useToggle(options: UseToggleOptions = {}): UseToggleReturn {
  const { defaultValue = false, onToggle } = options;

  const isOpen = ref(defaultValue);

  const toggle = () => {
    isOpen.value = !isOpen.value;
    onToggle?.(isOpen.value);
  };

  const open = () => {
    if (!isOpen.value) {
      isOpen.value = true;
      onToggle?.(true);
    }
  };

  const close = () => {
    if (isOpen.value) {
      isOpen.value = false;
      onToggle?.(false);
    }
  };

  return {
    isOpen,
    toggle,
    open,
    close
  };
}

