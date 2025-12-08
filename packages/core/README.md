# @leaf/core

框架无关的核心逻辑库，提供组件的基础逻辑和工具函数。

## 安装

```bash
npm install @leaf/core
```

## 特性

- ✅ 完全框架无关
- ✅ 纯 JavaScript/TypeScript 实现
- ✅ 无运行时依赖
- ✅ 完整的 TypeScript 类型定义

## 使用示例

### Button 组件逻辑

```typescript
import { useButton } from '@leaf/core';

const button = useButton({
  disabled: false,
  onClick: (event) => console.log('clicked', event)
});

// 状态
console.log(button.state.isPressed);
console.log(button.state.isFocused);

// 事件处理器
button.handlers.onClick(new MouseEvent('click'));

// ARIA 属性
console.log(button.ariaAttrs);
```

### 工具函数

```typescript
import { generateId, isFocusable, setAriaAttributes } from '@leaf/core';

// 生成唯一 ID
const id = generateId('button');

// 检查元素是否可聚焦
const element = document.querySelector('button');
if (isFocusable(element)) {
  // ...
}

// 设置 ARIA 属性
setAriaAttributes(element, {
  'aria-label': '按钮',
  'aria-disabled': false
});
```

## API

### Components

- `useButton` - Button 组件逻辑

### Utils

- `generateId` - 生成唯一 ID
- `isFocusable` - 检查元素是否可聚焦
- `getFocusableElements` - 获取所有可聚焦元素
- `setAriaAttributes` - 设置 ARIA 属性
- `isElementVisible` - 检查元素是否可见
- `closest` - 查找最近的匹配祖先元素

## 类型定义

所有 API 都提供完整的 TypeScript 类型定义。

