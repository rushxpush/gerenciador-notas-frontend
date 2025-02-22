import { onMounted, ref, type Ref } from "vue";
import { createNote, getAllNotes } from "../api/notesAPI";
import type { ResponseError, Note } from "../types/api";

export const useNotes = () => {
  const notes: Ref = ref([]);
  const isLoadingNotes: Ref<boolean> = ref(false);
  const errorNotes = ref();

  const fetchNotes = async (): Promise<void> => {
    const responseData = await getAllNotes();
    notes.value = responseData;
  }

  const postNote = async (data: any): Promise<Note | ResponseError> => {
    const responseData: Note | ResponseError = await createNote(data);

    if ("error" in responseData) {
      errorNotes.value = responseData.message;
    }
    else {
      notes.value.push(responseData);
    }

    return responseData;
  }

  onMounted(async () => {
    fetchNotes();
  });

  return {
    notes,
    postNote,
    fetchNotes,
    isLoadingNotes,
    errorNotes,
  };
}