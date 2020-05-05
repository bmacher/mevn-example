import { reactive, toRefs } from '@vue/composition-api';

interface Todo {
  done: boolean;
  task: string;
}

export function useTodos() {
  const state: { todo: string; todos: Todo[] } = reactive({
    todo: '',
    todos: [{
      done: false,
      task: 'Awesome Task',
    }, {
      done: true,
      task: 'Awesome Task',
    }],
  });

  const addTodo = (todo: string): void => {
    if (todo.length >= 5) {
      const newTodo = {
        task: todo.toUpperCase(),
        done: false,
      };

      state.todos = [...state.todos, newTodo];
      state.todo = '';
    }
  };

  const deleteTodo = (todo: Todo): void => {
    state.todos = state.todos.filter((_todo) => _todo !== todo);
  };

  return {
    ...toRefs(state),
    addTodo,
    deleteTodo,
  };
}
