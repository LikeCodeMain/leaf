/**
 * 可访问性（Accessibility）工具函数（框架无关）
 */

/**
 * 生成唯一的 ID
 */
export function generateId(prefix = 'leaf'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 检查元素是否可聚焦
 */
export function isFocusable(element: HTMLElement): boolean {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  return element.matches(focusableSelectors);
}

/**
 * 获取所有可聚焦的元素
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
}

/**
 * 设置 ARIA 属性
 */
export function setAriaAttributes(
  element: HTMLElement,
  attributes: Record<string, string | boolean | null | undefined>
): void {
  Object.entries(attributes).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      element.removeAttribute(key);
    } else {
      element.setAttribute(key, String(value));
    }
  });
}

