# @leaf/vue3

Leaf UI 的 Vue 3 组件实现，基于 `@leaf/core` 构建。

## 安装

```bash
npm install @leaf/vue3
```

**注意**：`@leaf/vue3` 依赖 `@leaf/core`，安装时会自动安装。

## 特性

- ✅ 基于 Vue 3 Composition API
- ✅ 完整的 TypeScript 支持
- ✅ 响应式状态管理
- ✅ 可访问性支持

## 使用示例

### 使用组件

```vue
<template>
  <Button @click="handleClick" :disabled="false">
    点击我
  </Button>
</template>

<script setup lang="ts">
import { Button } from '@leaf/vue3';

const handleClick = () => {
  console.log('clicked');
};
</script>
```

### 使用 Composable

```vue
<template>
  <button
    :class="['custom-button', { 'is-pressed': isPressed }]"
    @click="onClick"
  >
    自定义按钮
  </button>
</template>

<script setup lang="ts">
import { useButton } from '@leaf/vue3';

const { isPressed, onClick, ariaAttrs } = useButton({
  onClick: () => console.log('clicked')
});
</script>
```

## 组件列表

### Button

按钮组件，提供完整的按钮逻辑和可访问性支持。

**Props：**
- `disabled?: boolean` - 是否禁用
- `type?: 'button' | 'submit' | 'reset'` - 按钮类型
- `onClick?: (event: MouseEvent) => void` - 点击事件
- `onFocus?: (event: FocusEvent) => void` - 聚焦事件
- `onBlur?: (event: FocusEvent) => void` - 失焦事件
- `class?: string` - 自定义样式类

**Composable：**
```typescript
const {
  isPressed,      // Ref<boolean> - 是否按下
  isFocused,      // Ref<boolean> - 是否聚焦
  disabled,       // boolean - 是否禁用
  type,           // string - 按钮类型
  onClick,        // 点击处理器
  onFocus,        // 聚焦处理器
  onBlur,         // 失焦处理器
  ariaAttrs       // ComputedRef - ARIA 属性
} = useButton(props);
```

## 重新导出

`@leaf/vue3` 重新导出了 `@leaf/core` 的所有工具函数和类型，你可以直接从 `@leaf/vue3` 导入：

```typescript
import { generateId, isFocusable } from '@leaf/vue3';
```

