<template>
  <div :class="wrapperClass">
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :name="name"
      :minlength="minLength"
      :maxlength="maxLength"
      :autocomplete="autocomplete"
      :aria-disabled="ariaAttrs['aria-disabled']"
      :aria-readonly="ariaAttrs['aria-readonly']"
      :aria-required="ariaAttrs['aria-required']"
      :class="inputClass"
      @input="handleInput"
      @focus="handleFocusEvent"
      @blur="handleBlurEvent"
      @keydown.enter="handleEnter"
    />
    <button
      v-if="showClear"
      type="button"
      :class="clearButtonClass"
      @click="handleClear"
      aria-label="清除"
    >
      <slot name="clear-icon">
        <span>×</span>
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useInput } from '../core/useInput';
import type { InputProps } from '../core/types';

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  disabled: false,
  readonly: false,
  type: 'text',
  required: false
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  input: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  enter: [event: KeyboardEvent];
  clear: [];
}>();

// 使用核心逻辑
const {
  value,
  isFocused,
  showClear,
  disabled,
  readonly,
  type,
  handleInput: baseHandleInput,
  handleFocus,
  handleBlur,
  handleClear: baseHandleClear,
  ariaAttrs
} = useInput(props);

// 同步 modelValue 到内部 value
watch(() => props.modelValue, (newValue) => {
  value.value = newValue || '';
}, { immediate: true });

// 包装输入处理，触发 v-model 更新
const handleInput = (event: Event) => {
  baseHandleInput(event);
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('input', event);
};

// 包装清除处理，触发 v-model 更新
const handleClear = () => {
  baseHandleClear();
  emit('update:modelValue', '');
  emit('clear');
};

// 包装其他事件
const handleFocusEvent = (event: FocusEvent) => {
  handleFocus(event);
  emit('focus', event);
};

const handleBlurEvent = (event: FocusEvent) => {
  handleBlur(event);
  emit('blur', event);
};

const handleEnter = (event: KeyboardEvent) => {
  props.onEnter?.(event);
  emit('enter', event);
};

// 样式类
const wrapperClass = computed(() => {
  return [
    'leaf-input-wrapper',
    props.class ? `${props.class}-wrapper` : '',
    {
      'is-focused': isFocused.value,
      'is-disabled': disabled,
      'is-readonly': readonly,
      'has-value': value.value.length > 0
    }
  ];
});

const inputClass = computed(() => {
  return [
    'leaf-input',
    props.class,
    {
      'is-focused': isFocused.value,
      'is-disabled': disabled,
      'is-readonly': readonly
    }
  ];
});

const clearButtonClass = computed(() => {
  return [
    'leaf-input-clear',
    {
      'is-visible': showClear.value
    }
  ];
});
</script>

