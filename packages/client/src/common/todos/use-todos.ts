import { reactive, toRefs, computed } from '@vue/composition-api';
import { Todo } from '@mevn/common';
import { todosService } from './todos-service';

export function useTodos() {
  todosService.loadTodos();

  const state = reactive({
    todo: '',
    todos: computed(() => todosService.todos),
  });

  const addTodo = (todo: string): void => {
    if (todo.length >= 5) {
      todosService.addTodo(todo);
      state.todo = '';
    }
  };

  const toggleDone = (todo: Todo): void => {
    todosService.toggleDone(todo);
  };

  const deleteTodo = (todo: Todo): void => {
    todosService.deleteTodo(todo);
  };

  return {
    ...toRefs(state),
    addTodo,
    toggleDone,
    deleteTodo,
  };
}
