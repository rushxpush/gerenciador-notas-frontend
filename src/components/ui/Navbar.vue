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
  padding: 10px;
  background-color: rgb(59, 59, 59);
}
</style>