// @vitest-environment happy-dom
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils'
import CreateNoteForm from '../../components/CreateNoteForm.vue';
import { useNotesStore } from '../../stores/notesStore';
import { useStatusStore } from '../../stores/statusStore';
import { createTestingPinia } from '@pinia/testing';


const testTitle = 'test-title';
const testContent = 'test-content';

vi.mock('../../api/notesAPI', () => ({
  createNote: vi.fn(() => Promise.resolve({title: testTitle, content: testContent})) ,
  getAllNotes: vi.fn(() => Promise.resolve([]))
}))

describe('CreateNoteForm.vue', () => {

  it('renders inputs fields and button', async () => {
     const wrapper = mount(CreateNoteForm, {
      global: {
        plugins: [ createTestingPinia() ]
      }
     });

     expect(wrapper.find('input#title').exists()).toBe(true);
     expect(wrapper.find('input#content').exists()).toBe(true);
     expect(wrapper.find('button').exists()).toBe(true);
  });

  it('shows error message if input title is empty', async () => {
     const wrapper = mount(CreateNoteForm, {
      global: {
        // Didn't stub actions for initial speed of testing
        plugins: [ createTestingPinia({ stubActions: false }) ]
      }
     });
     const statusStore = useStatusStore();

     await wrapper.find('button').trigger('click');

     expect(statusStore.addMessage).toHaveBeenCalledWith('O título da nota é obrigatório', 'error');
     expect(statusStore.messages?.[0].text).toBe('O título da nota é obrigatório');
  });

  it('calls postNote when valid data is submitted', async () => {
    const wrapper = mount(CreateNoteForm, {
      global: {
        plugins: [ createTestingPinia({ stubActions: false }) ]
      }
    })

    const notesStore = useNotesStore();
    
    const inputTitle = wrapper.find('input#title');
    const inputContent = wrapper.find('input#content');

    inputTitle.setValue(testTitle);
    inputContent.setValue(testContent);
    await wrapper.find('button').trigger('click');

    expect(notesStore.postNote).toHaveBeenCalledWith({ title: testTitle, content: testContent })
    // expect(statusStore.messages?.[0]).toEqual()
  });

  it('adds a new note to the store when postNote succeeds', async () => {
    const wrapper = mount(CreateNoteForm, {
      global: {
        plugins: [ createTestingPinia({ stubActions: false }) ]
      }
    })

    const notesStore = useNotesStore();
    
    const input = wrapper.find('input#title');
    input.setValue(testTitle);
    await wrapper.find('button').trigger('click');
    
    expect(notesStore.notes).toEqual([{ title: testTitle, content: testContent }])
  });
});