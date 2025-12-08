# Button 组件

Button 组件采用逻辑与渲染分离的架构设计，支持多框架。

## 📁 目录结构

```
button/
├── core/              # 核心逻辑（框架无关）
│   ├── useButton.ts  # Button 逻辑 Composable
│   └── types.ts      # 类型定义
├── vue/               # Vue 实现
│   ├── Button.vue    # Vue 组件
│   └── index.ts      # Vue 导出
└── index.ts          # 核心逻辑导出
```

## 🚀 使用方式

### 方式一：使用核心逻辑（框架无关）

```typescript
import { useButton } from 'leaf/components/button';

const { isPressed, onClick, ariaAttrs } = useButton({
  onClick: () => console.log('clicked')
});
```

### 方式二：使用 Vue 组件

```vue
<template>
  <Button @click="handleClick">点击我</Button>
</template>

<script setup lang="ts">
import { Button } from 'leaf/components/button/vue';

const handleClick = () => {
  console.log('clicked');
};
</script>
```

## 🔮 未来添加 React 支持

当需要添加 React 支持时，只需：

1. 创建 `react/` 目录
2. 实现 `Button.tsx` 组件
3. 使用 `core/useButton.ts` 中的逻辑
4. 在 `react/index.ts` 中导出

```
button/
├── core/              # 共享逻辑
├── vue/               # Vue 实现
└── react/             # React 实现（未来）
    ├── Button.tsx
    └── index.ts
```

