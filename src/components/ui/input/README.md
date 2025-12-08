# Input 组件

Input 组件采用逻辑与渲染分离的架构设计，支持多框架。

## 📁 目录结构

```
input/
├── core/              # 核心逻辑（框架无关）
│   ├── useInput.ts   # Input 逻辑 Composable
│   └── types.ts      # 类型定义
├── vue/               # Vue 实现
│   ├── Input.vue    # Vue 组件
│   └── index.ts      # Vue 导出
└── index.ts          # 核心逻辑导出
```

## 🚀 使用方式

### 方式一：使用核心逻辑（框架无关）

```typescript
import { useInput } from 'leaf/components/input';

const { value, isFocused, handleInput, handleClear } = useInput({
  onInput: (event) => {
    console.log('输入值:', event.target.value);
  },
  onClear: () => {
    console.log('已清除');
  }
});
```

### 方式二：使用 Vue 组件

#### 基础用法

```vue
<template>
  <Input
    v-model="value"
    placeholder="请输入内容"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Input } from 'leaf/components/input/vue';

const value = ref('');
const handleInput = (event: Event) => {
  console.log('输入值:', (event.target as HTMLInputElement).value);
};
</script>
```

#### 禁用状态

```vue
<template>
  <Input
    v-model="value"
    placeholder="禁用状态"
    disabled
  />
</template>
```

#### 只读状态

```vue
<template>
  <Input
    v-model="value"
    placeholder="只读状态"
    readonly
  />
</template>
```

#### 带清除按钮

```vue
<template>
  <Input
    v-model="value"
    placeholder="输入内容后可清除"
  >
    <template #clear-icon>
      <span>✕</span>
    </template>
  </Input>
</template>
```

#### 不同类型

```vue
<template>
  <Input type="email" placeholder="邮箱" />
  <Input type="password" placeholder="密码" />
  <Input type="number" placeholder="数字" />
  <Input type="tel" placeholder="电话" />
</template>
```

#### 带验证

```vue
<template>
  <Input
    v-model="value"
    placeholder="必填项"
    required
    :min-length="3"
    :max-length="20"
  />
</template>
```

## 📋 Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string` | `''` | 输入框的值（v-model） |
| `placeholder` | `string` | `undefined` | 占位符文本 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `type` | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | 输入框类型 |
| `required` | `boolean` | `false` | 是否必填 |
| `minLength` | `number` | `undefined` | 最小长度 |
| `maxLength` | `number` | `undefined` | 最大长度 |
| `name` | `string` | `undefined` | 输入框名称 |
| `autocomplete` | `string` | `undefined` | 自动完成 |
| `class` | `string` | `undefined` | 自定义类名 |
| `onInput` | `(event: Event) => void` | `undefined` | 输入事件 |
| `onFocus` | `(event: FocusEvent) => void` | `undefined` | 聚焦事件 |
| `onBlur` | `(event: FocusEvent) => void` | `undefined` | 失焦事件 |
| `onEnter` | `(event: KeyboardEvent) => void` | `undefined` | 回车事件 |
| `onClear` | `() => void` | `undefined` | 清除事件 |

## 🎨 插槽

| 插槽名 | 说明 |
|--------|------|
| `clear-icon` | 自定义清除按钮图标 |

## 🔮 未来添加 React 支持

当需要添加 React 支持时，只需：

1. 创建 `react/` 目录
2. 实现 `Input.tsx` 组件
3. 使用 `core/useInput.ts` 中的逻辑
4. 在 `react/index.ts` 中导出

```
input/
├── core/              # 共享逻辑
├── vue/               # Vue 实现
└── react/             # React 实现（未来）
    ├── Input.tsx
    └── index.ts
```

