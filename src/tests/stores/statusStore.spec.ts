import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useStatusStore } from '../../stores/statusStore'

const testMessageSuccess = { text: 'Test message', type: 'success' };
const testMessageError = { text: 'Second message', type: 'error' };
const testMessageLoadingData = { text: 'Loading data...', type: 'info' };

describe('Status Store', () => {
  let statusStore: ReturnType<typeof useStatusStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    statusStore = useStatusStore();
  })

  it('should initialize with an empty message list and loading as false', () => {
    expect(statusStore.messages).toEqual([]);
    expect(statusStore.isLoading).toBe(false);
  })

  it('should add a message', () => {
    statusStore.addMessage('Test message', 'success');
    
    expect(statusStore.messages).toHaveLength(1);
    expect(statusStore.messages[0]).toEqual(testMessageSuccess);
  })

  it('should remove a message', () => {
    statusStore.addMessage('First message', 'info');
    statusStore.addMessage('Second message', 'error');

    statusStore.removeMessage();
    
    expect(statusStore.messages).toHaveLength(1);
    expect(statusStore.messages[0]).toEqual(testMessageError);
  })

  it('should set loading state and add a loading message', () => {
    statusStore.setLoading(true, 'Loading data...');

    expect(statusStore.isLoading).toBe(true);
    expect(statusStore.messages).toContainEqual(testMessageLoadingData);
  })

  it('should set loading state to false without adding a message', () => {
    statusStore.setLoading(false);

    expect(statusStore.isLoading).toBe(false);
  })
})
