# Components 组件目录

组件库按功能分为三个模块：**UI**、**功能**、**AI**。

## 📁 目录结构

```
components/
├── ui/              # UI 组件模块（基础界面组件）
├── functional/      # 功能组件模块（复杂功能组件）
├── ai/              # AI 组件模块（AI 相关组件）
└── index.ts         # 统一导出
```

## 🎨 UI 组件模块 (`ui/`)

基础的用户界面组件，提供基本的交互功能。

**已实现：**
- ✅ Button（按钮）

**待实现：**
- 🚧 Input（输入框）
- 🚧 Select（选择器）
- 🚧 Checkbox（复选框）
- 🚧 Radio（单选框）
- 🚧 Switch（开关）

**使用示例：**
```typescript
import { Button, useButton } from 'leaf';
// 或
import { Button } from 'leaf/components/ui';
```

## ⚙️ 功能组件模块 (`functional/`)

具有特定功能的复杂组件，通常由多个基础 UI 组件组合而成。

**计划中的组件：**
- Form（表单）
- Table（表格）
- Dialog（对话框）
- Upload（上传）
- DatePicker（日期选择器）
- Pagination（分页）
- Tabs（标签页）

**使用示例：**
```typescript
import { Form, Table } from 'leaf/components/functional';
```

## 🤖 AI 组件模块 (`ai/`)

与人工智能相关的组件，提供 AI 能力的封装和集成。

**计划中的组件：**
- ChatBot（聊天机器人）
- AIImageGenerator（AI 图片生成器）
- AITextAnalyzer（AI 文本分析器）
- AIVoiceAssistant（AI 语音助手）

**使用示例：**
```typescript
import { ChatBot } from 'leaf/components/ai';
```

## 📦 导出方式

### 统一导出（推荐）
```typescript
import { Button, useButton } from 'leaf';
```

### 按模块导入
```typescript
// UI 组件
import { Button } from 'leaf/components/ui';

// 功能组件
import { Form } from 'leaf/components/functional';

// AI 组件
import { ChatBot } from 'leaf/components/ai';
```

## 🏗️ 组件结构规范

每个组件都应遵循以下结构：

```
component-name/
├── core/              # 核心逻辑（框架无关）
│   ├── useXxx.ts     # 逻辑 Composable
│   └── types.ts      # 类型定义
├── vue/               # Vue 实现
│   ├── Xxx.vue
│   └── index.ts
├── react/             # React 实现（可选）
│   ├── Xxx.tsx
│   └── index.ts
├── index.ts           # 导出核心逻辑
└── README.md          # 组件文档
```

## 🚀 添加新组件

### 1. 在对应模块下创建组件目录

```bash
# UI 组件
src/components/ui/new-component/

# 功能组件
src/components/functional/new-component/

# AI 组件
src/components/ai/new-component/
```

### 2. 创建核心逻辑

```typescript
// core/useNewComponent.ts
export function useNewComponent() {
  // 框架无关的逻辑
}
```

### 3. 实现 Vue 组件

```vue
<!-- vue/NewComponent.vue -->
<template>...</template>
<script setup lang="ts">
import { useNewComponent } from '../core/useNewComponent';
</script>
```

### 4. 更新模块导出

```typescript
// ui/index.ts 或 functional/index.ts 或 ai/index.ts
export * from './new-component';
export * from './new-component/vue';
```

