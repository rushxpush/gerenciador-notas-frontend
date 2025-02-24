<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/ui/Navbar.vue';
import StatusLogger from './components/ui/StatusLogger.vue';
</script>

<template>
  <div>
    <div class="top-container">
      <Navbar />
      <StatusLogger />
    </div>
    <div class="app-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.top-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.app-container {
  position: relative;
  width: 100%;
}
</style>
