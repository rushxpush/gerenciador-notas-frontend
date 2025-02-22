<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
    required: true
  },
  label: {
    type: String,
    default: '',
    required: true
  },
  modelValue: {
    type: String
  }
})

const emit = defineEmits([
  'update:modelValue'
])

const inputValue = ref('');
</script>

<template>
  <div class="input-container">
    <label :for="props.id">{{ props.label }}</label>
    <input type="text" :id="props.id" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
  </div>
</template>


<style scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
}

input {
  width: 100%;
}
</style>