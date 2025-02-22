<script setup lang="ts">
import { useNotes } from '../composables/useNotes';

const { notes } = useNotes();
</script>

<template>
  <div class="table-container card">
    <table>
      <thead>
        <tr >
          <th>Título</th>
          <th>Conteúdo</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="note in notes">
          <td>{{ note.title }}</td>
          <td>{{ note.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>