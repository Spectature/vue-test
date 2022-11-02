import { shallowMount } from '@vue/test-utils'
import TodoHeader from '@/components/TodoApp/TodoHeader'

describe('TodoHeader.vue', () => {
  const wrapper = shallowMount(TodoHeader)
  test('enter and getValue', async () => {
    const input = wrapper.find('.new-todo')
    await input.setValue('0123')
    await input.trigger('keyup.enter')
    expect(wrapper.emitted()['new-todo']).toBeTruthy()
    expect(wrapper.emitted()['new-todo'][0][0]).toBe('0123')
    expect(input.element.value).toBe('')
  })
})
