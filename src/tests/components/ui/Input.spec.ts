// @vitest-environment happy-dom
import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia';
import Input from '../../../components/ui/Input.vue';

describe('Input component', () => {
  const testId = 'test-id';
  const testLabel = 'test-label';
  const initialvalue = 'Initial value';
  const newValue = 'newValue';

  it('renders the input with correct id and label', () => {
    const wrapper = mount(Input, {
      props: {
        id: testId,
        label: testLabel,
        modelValue: initialvalue
      }
    })

    const input = wrapper.find('input');
    const label = wrapper.find('label');

    expect(label.text()).toBe(testLabel);
    expect(label.attributes('for')).toBe(testId);
    expect(input.attributes('id')).toBe(testId);
    expect(input.element.value).toBe(initialvalue);
  });

  it('emits update:modelValue when input value changes', () => {
    const wrapper = mount(Input, {
      props: {
        id: testId,
        label: testLabel,
        modelValue: initialvalue
      }
    });

    const input = wrapper.find('input');
    input.setValue(newValue);

    const emittedEvents = wrapper.emitted()['update:modelValue'];

    expect(emittedEvents).toBeTruthy();
    expect(emittedEvents?.[0]).toEqual([newValue]);
  });
});