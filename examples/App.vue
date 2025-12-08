<template>
  <div class="app">
    <h1>Leaf 组件库示例</h1>
    
    <section>
      <h2>Button 组件示例</h2>
      
      <h3>使用默认组件</h3>
      <Button @click="handleClick">点击我</Button>
      
      <h3>使用 Composable 自定义渲染</h3>
      <button
        :class="['custom-button', { 'is-pressed': isPressed }]"
        @click="onClick"
      >
        自定义按钮
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button, useButton } from '../src';
// Button 从 ui/button/vue 导出，useButton 从 ui/button/core 导出

// 使用默认组件
const handleClick = () => {
  console.log('Button clicked');
};

// 使用 Composable 自定义渲染
const { isPressed, onClick } = useButton({
  onClick: () => {
    console.log('Custom button clicked');
  }
});
</script>

<style scoped>
.app {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1rem;
}

h3 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.custom-button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.custom-button.is-pressed {
  background-color: #0056b3;
}
</style>

