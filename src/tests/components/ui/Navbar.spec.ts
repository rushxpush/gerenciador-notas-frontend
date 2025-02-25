// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import { createRouter, createWebHashHistory } from 'vue-router';
import Navbar from '../../../components/ui/Navbar.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: {} },
    { path: '/lista-de-notas', name: 'NotesList', component: {} }
  ]
})

describe('Navbar.vue', () => {
  it('renders navigation links', async () => {
    router.push('/')
    await router.isReady();

    const wrapper = mount(Navbar, {
      global: {
        plugins: [router]
      }
    })

    const links = wrapper.findAll('a');

    expect(links).toHaveLength(2);
    expect(links[0].text()).toBe('Cadastro de Notas');
    expect(links[0].attributes('href')).toBe('#/');
    expect(links[1].text()).toBe('Lista de Notas');
    expect(links[1].attributes('href')).toBe('#/lista-de-notas');
  });
  
});

