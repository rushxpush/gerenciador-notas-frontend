<script setup lang="ts">
import { computed, watch } from 'vue';
import { useStatusStore } from '../../stores/statusStore';

const {messages, removeMessage} = useStatusStore();
const currentMessage = computed(() => messages[0])

watch(currentMessage, (newMessage) => {
  if (newMessage) {
    setTimeout(() => {
      removeMessage();
    }, 1200);
  }
});
</script>

<template>
  <Transition>
    <div v-if="currentMessage" class="status-logger-container" :class="currentMessage.type">
      {{ currentMessage.text }}
    </div>
  </Transition>
</template>

<style scoped>
.status-logger-container {
  top: 0;
  padding: 5px;
  background-color: rgb(115, 115, 115);
}

p {
  padding: 0;
  margin: 0;
}

.success {
  background-color: rgb(72, 146, 72);
}

.error {
  background-color: rgb(146, 25, 25);
}

.info {
  background-color: rgb(74, 101, 164);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>