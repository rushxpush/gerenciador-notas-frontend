import { defineStore } from "pinia";
import type { Status } from "../types/stores";
import { ref, type Ref } from "vue";

export const useStatusStore = defineStore('status', () => {
  const messages: Ref<Status[]> = ref<Status[]>([]);
  const isLoading: Ref<boolean> = ref(false);

  const addMessage = (text: string, type: "success" | "error" | "info"): void => {
    messages.value.push({ text, type });
  }

  const removeMessage = (): void => {
    messages.value.shift();
  }

  const setLoading = (loading: boolean, text: string = "Carregando..."): void => {
    isLoading.value = loading;

    if (loading) addMessage(text, "info");
  }

  return { 
    messages,
    isLoading,
    addMessage,
    removeMessage,
    setLoading,
  }
});