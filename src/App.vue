<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/ui/Navbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="app-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  width: 100%;
}
</style>
