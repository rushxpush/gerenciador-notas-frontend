import { defineStore } from "pinia";
import { useStatusStore } from "./statusStore";
import { ref, type Ref } from "vue";
import { createNote, getAllNotes } from "../api/notesAPI";
import type { ResponseError, Note } from "../types/api";

export const useNotesStore = defineStore('notes', () => {
  const statusStore = useStatusStore();
  const notes: Ref = ref([]);
  const isLoadingNotes: Ref<boolean> = ref(false);
  const errorNotes: Ref<string> = ref('');
  const hasFetchedNotes = ref(false);


  const fetchNotes = async (): Promise<void> => {
    if (hasFetchedNotes.value) return; 

    statusStore.setLoading(true, "Carregando notas...");

    const responseData = await getAllNotes();

    statusStore.setLoading(false);
    statusStore.addMessage("Notas carregadas com sucesso", "success");
    
    notes.value = responseData;
    hasFetchedNotes.value = true;
  }

  const postNote = async (data: any): Promise<Note | ResponseError> => {
    statusStore.setLoading(true, "Salvando Nota...");

    const responseData: Note | ResponseError = await createNote(data);

    statusStore.setLoading(false);

    if ("error" in responseData) {
      errorNotes.value = responseData.message;
      statusStore.addMessage("Error ao tentar salvar nota", "error");
    }
    else {
      notes.value.push(responseData);
      statusStore.addMessage("Nota salva com successo", "success");
    }

    return responseData;
  }

  return {
    notes,
    postNote,
    fetchNotes,
    isLoadingNotes,
    errorNotes,
  };
});