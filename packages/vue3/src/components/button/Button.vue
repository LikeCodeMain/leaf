<template>
  <button
    :type="type"
    :disabled="disabled"
    :aria-disabled="ariaAttrs['aria-disabled']"
    :aria-pressed="ariaAttrs['aria-pressed']"
    :role="ariaAttrs.role"
    :class="buttonClass"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useButton } from './useButton';
import type { ButtonProps } from '@leaf/core';

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  type: 'button'
});

// 使用核心逻辑
const {
  isPressed,
  isFocused,
  disabled,
  type,
  onClick,
  onFocus,
  onBlur,
  ariaAttrs
} = useButton(props);

// 样式类（可选，开发者可以完全自定义）
const buttonClass = computed(() => {
  return [
    props.class,
    {
      'is-pressed': isPressed.value,
      'is-focused': isFocused.value,
      'is-disabled': disabled
    }
  ];
});
</script>

