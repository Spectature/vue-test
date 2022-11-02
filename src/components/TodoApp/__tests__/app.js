import { shallowMount } from '@vue/test-utils'
import ToDoApp from '@/components/TodoApp/index'

describe('TodoHeader.vue', () => {
  const wrapper = shallowMount(ToDoApp)
  test('New todo', async () => {
    const text = 'play'
    wrapper.vm.handleNewTodo(text)
    const todo = wrapper.vm.todos.find(t => t.text === text)
    expect(todo).toBeTruthy()
  })

  test('showList',() => {

  })
})
