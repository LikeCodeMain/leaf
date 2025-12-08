import { onMounted, onUnmounted } from 'vue';

export interface UseKeyboardOptions {
  onKeyDown?: (event: KeyboardEvent) => void;
  keyMap?: Record<string, (event: KeyboardEvent) => void>;
}

export interface UseKeyboardReturn {
  handleKeyDown: (event: KeyboardEvent) => void;
}

/**
 * 键盘导航 Composable
 * 用于处理键盘事件和快捷键
 */
export function useKeyboard(options: UseKeyboardOptions = {}): UseKeyboardReturn {
  const { onKeyDown, keyMap } = options;

  const handleKeyDown = (event: KeyboardEvent) => {
    // 如果提供了 keyMap，优先使用 keyMap
    if (keyMap) {
      const key = event.key.toLowerCase();
      const handler = keyMap[key];
      if (handler) {
        handler(event);
        return;
      }
    }

    // 否则调用通用的 onKeyDown
    onKeyDown?.(event);
  };

  return {
    handleKeyDown
  };
}

