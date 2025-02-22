<script setup lang="ts"></script>

<template>
  <div class="navbar-container">
    <nav>
      <RouterLink to="/" >Cadastro de Notas</RouterLink>
      |
      <RouterLink to="/lista-de-notas" >Lista de Notas</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgb(59, 59, 59);
}
</style>