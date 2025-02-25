// @vitest-environment happy-dom
import { describe } from 'vitest';
// import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
// import { mount } from '@vue/test-utils'
// import { useNotesStore } from '../../stores/notesStore';
// import { createTestingPinia } from '@pinia/testing';
// import NotesList from '../../components/NotesList.vue';
// import { setActivePinia, createPinia } from 'pinia'
// import { useStatusStore } from '../../stores/statusStore'

// const mockNotes = [{ title: 'Note 1', content: 'Content 1' }]
// const mockNote = { title: 'New Note', content: 'New Content' }
// const mockError = { error: true, message: 'Error ao tentar salvar nota' }

// vi.mock('../../api/notesAPI', () => {
//   return {
//     getAllNotes: vi.fn(),
//     createNote: vi.fn()
//   }
// })

// import { getAllNotes, createNote } from '../../api/notesAPI';


describe('notesStore', () => {
  // beforeEach(() => {
  //   setActivePinia(createPinia())
  // })

  // afterEach(() => {
  //   vi.clearAllMocks();
  // })

  // it('fetchNotes should call getAllNotes and update state', async () => {
  //   const notesStore = useNotesStore()
  //   const statusStore = useStatusStore()

  //   vi.spyOn(statusStore, 'setLoading')
  //   vi.spyOn(statusStore, 'addMessage')
  //   console.log('---getAllNotes', getAllNotes)
  //   getAllNotes.mockResolvedValue(mockNote)

  //   await notesStore.fetchNotes()

  //   expect(statusStore.setLoading).toHaveBeenCalledWith(true, 'Carregando notas...')
  //   expect(statusStore.setLoading).toHaveBeenCalledWith(false)
  //   expect(statusStore.addMessage).toHaveBeenCalledWith('Notas carregadas com sucesso', 'success')
  //   expect(notesStore.notes).toEqual(mockNotes)
  // })

  // it('postNote should call createNote and update notes on success', async () => {
  //   const notesStore = useNotesStore()
  //   const statusStore = useStatusStore()

  //   vi.spyOn(statusStore, 'setLoading')
  //   vi.spyOn(statusStore, 'addMessage')

  //   const response = await notesStore.postNote(mockNote)
  //   console.log('response: ', response)
  //   console.log('mockNote: ', mockNote)

  //   expect(statusStore.setLoading).toHaveBeenCalledWith(true, 'Salvando Nota...')
  //   expect(statusStore.setLoading).toHaveBeenCalledWith(false)
  //   expect(statusStore.addMessage).toHaveBeenCalledWith('Nota salva com successo', 'success')
  //   // expect(notesStore.notes).toContainEqual(mockNote)
  // })

  // it('postNote should handle error response', async () => {
  //   const notesStore = useNotesStore()
  //   const statusStore = useStatusStore()

  //   vi.spyOn(statusStore, 'setLoading')
  //   vi.spyOn(statusStore, 'addMessage')

  //   const response = await notesStore.postNote({ title: 'Invalid Note' })

  //   expect(statusStore.setLoading).toHaveBeenCalledWith(true, 'Salvando Nota...')
  //   expect(statusStore.setLoading).toHaveBeenCalledWith(false)
  //   expect(statusStore.addMessage).toHaveBeenCalledWith('Error ao tentar salvar nota', 'error')
  //   expect(notesStore.errorNotes).toBe('Error ao tentar salvar nota')
  //   expect(response).toEqual(mockError)
  // })
})
