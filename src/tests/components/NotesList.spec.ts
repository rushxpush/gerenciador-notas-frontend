// @vitest-environment happy-dom
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils'
import { useNotesStore } from '../../stores/notesStore';
import { createTestingPinia } from '@pinia/testing';
import NotesList from '../../components/NotesList.vue';

vi.mock('../../api/notesAPI', () => ({
  getAllNotes: vi.fn(() => Promise.resolve([]))
}))

describe('NotestList.vue', () => {
  it('calls fetchNotes on mount', () => {
    const wrapper = mount(NotesList, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    });

    const notesStore = useNotesStore();
    expect(notesStore.fetchNotes).toHaveBeenCalled();
  });

  it('renders a list of notes', async () => {
    const wrapper = mount(NotesList, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    });

    const notesStore = useNotesStore();

    // Mock the notes data
    notesStore.notes = [
      { title: 'First Note', content: 'Content of first note' },
      { title: 'Second Note', content: 'Content of second note' },
    ]

    await wrapper.vm.$nextTick();

    const rows = wrapper.findAll('tbody tr');
    expect(rows).toHaveLength(2);

    expect(rows[0].text()).toContain('First Note');
    expect(rows[0].text()).toContain('Content of first note');

    expect(rows[1].text()).toContain('Second Note');
    expect(rows[1].text()).toContain('Content of second note');
  });
});