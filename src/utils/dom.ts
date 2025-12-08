/**
 * DOM 操作工具函数
 */

/**
 * 检查元素是否可见
 */
export function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * 获取元素的父元素
 */
export function getParentElement(element: HTMLElement): HTMLElement | null {
  return element.parentElement;
}

/**
 * 查找最近的匹配选择器的祖先元素
 */
export function closest(element: HTMLElement, selector: string): HTMLElement | null {
  return element.closest(selector) as HTMLElement | null;
}

