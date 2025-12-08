# Leaf UI - Headless UI 组件库

一个基于逻辑与渲染分离架构的 Headless UI 组件库，支持多框架。

## 📦 安装

### 原生 Web Components（框架无关）

```bash
npm install @leaf/core
```

### Vue 3 版本

```bash
npm install @leaf/vue3
```

## 🚀 快速开始

### 使用 @leaf/core（框架无关）

```typescript
import { useButton } from '@leaf/core';

const button = useButton({
  disabled: false,
  onClick: (event) => console.log('clicked', event)
});

// button.state - 状态对象
// button.handlers - 事件处理器
// button.ariaAttrs - ARIA 属性
```

### 使用 @leaf/vue3

```vue
<template>
  <Button @click="handleClick">点击我</Button>
</template>

<script setup lang="ts">
import { Button, useButton } from '@leaf/vue3';

const handleClick = () => {
  console.log('clicked');
};

// 或使用 Composable 自定义渲染
const { isPressed, onClick } = useButton({
  onClick: () => console.log('custom clicked')
});
</script>
```

## 📁 项目结构

```
leaf/
├── packages/
│   ├── core/          # @leaf/core - 框架无关的核心逻辑
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── utils/
│   │   └── package.json
│   │
│   └── vue3/          # @leaf/vue3 - Vue 3 组件实现
│       ├── src/
│       │   └── components/
│       └── package.json
│
└── package.json       # Workspace 配置
```

## 🎯 设计理念

- **逻辑与渲染分离**：核心逻辑在 `@leaf/core`，框架实现独立
- **框架无关**：`@leaf/core` 不依赖任何框架
- **类型安全**：完整的 TypeScript 支持
- **可访问性优先**：内置 ARIA 属性和键盘导航

## 📚 文档

- [组件文档](./docs/components/)
- [使用指南](./docs/guides/)

## 🔧 开发

```bash
# 安装依赖
npm install

# 构建所有包
npm run build

# 构建特定包
npm run build:core
npm run build:vue3

# 类型检查
npm run type-check
```

## 📄 许可证

MIT
