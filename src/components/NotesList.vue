<script setup lang="ts">
import { onMounted } from 'vue';
import { useNotesStore } from '../stores/notesStore';

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.fetchNotes()
});

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
        <tr v-for="note in notesStore.notes">
          <td>{{ note.title }}</td>
          <td>{{ note.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>