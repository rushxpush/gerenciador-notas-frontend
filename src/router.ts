import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import NotesListView from "./views/NotesListView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/lista-de-notas', component: NotesListView }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})