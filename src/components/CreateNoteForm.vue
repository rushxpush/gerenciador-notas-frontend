<script setup lang="ts">
import { ref } from 'vue';
import Input from './ui/Input.vue';
import { useNotes } from '../composables/useNotes';

const { postNote } = useNotes();

const title = ref('');
const content = ref('');

const handleCreateNote = async () => {
  const responsePostNote = await postNote({
    title: title.value,
    content: content.value
  })
  console.log('responsePostNote: ', responsePostNote)
}

</script>

<template>
  <div class="create-note-form-container card">
    <Input id="title" label="Título" v-model="title" />
    <Input id="content" label="Conteúdo" v-model="content" />
    <button @click="handleCreateNote">Criar Nota</button>
  </div>
</template>

<style scoped>
.create-note-form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

button {
  width: 100%;
}
</style>