// @vitest-environment happy-dom
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useNotesStore } from '../../stores/notesStore';
import { setActivePinia, createPinia } from 'pinia'
import { useStatusStore } from '../../stores/statusStore'
import type { Note, ResponseError } from "../../types/api";
import * as notesAPI from '../../api/notesAPI';

const mockNotes: Note = {  _id: '1', __v: 0, title: 'Note 1', content: 'Content 1' }
const mockNote: Note = { _id: '1', __v: 0, title: 'New Note', content: 'New Content' }
const mockError: ResponseError = { error: 'Something went wrong', message: 'Cannot POST/notes', status: 500 }

describe('Notes Store', () => {

  let notesStore: ReturnType<typeof useNotesStore>;
  let statusStore: ReturnType<typeof useStatusStore>;

  beforeEach(() => {
    setActivePinia(createPinia())
    notesStore = useNotesStore()
    statusStore = useStatusStore()
  })

  afterEach(() => {
    vi.clearAllMocks();
  })

  it('fetchNotes should call getAllNotes and update state', async () => {
    vi.spyOn(statusStore, 'setLoading')
    vi.spyOn(statusStore, 'addMessage')

    vi.spyOn(notesAPI, 'getAllNotes').mockResolvedValue(mockNotes);

    await notesStore.fetchNotes()

    expect(statusStore.setLoading).toHaveBeenCalledWith(true, 'Carregando notas...')
    expect(statusStore.setLoading).toHaveBeenCalledWith(false)
    expect(statusStore.addMessage).toHaveBeenCalledWith('Notas carregadas com sucesso', 'success')
    expect(notesStore.notes).toEqual(mockNotes)
  })

  it('postNote should call createNote and update notes on success', async () => {
    vi.spyOn(statusStore, 'setLoading')
    vi.spyOn(statusStore, 'addMessage')

    vi.spyOn(notesAPI, 'createNote').mockResolvedValue(mockNote);

    await notesStore.postNote(mockNote)

    expect(statusStore.setLoading).toHaveBeenCalledWith(true, 'Salvando Nota...')
    expect(statusStore.setLoading).toHaveBeenCalledWith(false)
    expect(statusStore.addMessage).toHaveBeenCalledWith('Nota salva com successo', 'success')
    expect(notesStore.notes).toContainEqual(mockNote)
  })

  it('postNote should handle error response if backend is unavailable', async () => {
    vi.spyOn(statusStore, 'setLoading')
    vi.spyOn(statusStore, 'addMessage')

    vi.spyOn(notesAPI, 'createNote').mockResolvedValue(mockError);

    const response = await notesStore.postNote(mockNote)

    expect(statusStore.setLoading).toHaveBeenCalledWith(true, 'Salvando Nota...')
    expect(statusStore.setLoading).toHaveBeenCalledWith(false)
    expect(statusStore.addMessage).toHaveBeenCalledWith('Error ao tentar salvar nota', 'error')
    expect(notesStore.errorNotes).toBe('Cannot POST/notes')
    expect(response).toEqual(mockError)
  })
})
