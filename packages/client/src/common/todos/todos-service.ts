/* eslint-disable no-alert */
import axios from 'axios';
import { reactive, toRefs, Ref } from '@vue/composition-api';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Todo, isTodo } from '@mevn/common';

class TodoService {
  public readonly state: { todos: Todo[] } = reactive({
    todos: [],
  });

  public get todos(): Ref<Todo[]> {
    return toRefs(this.state).todos;
  }

  public async loadTodos(): Promise<void> {
    const resp = await axios
      .get('http://localhost:3000/todos')
      .catch(console.error);

    if (!resp) return;

    this.state.todos = resp.data;
  }

  public async addTodo(task: string): Promise<void> {
    const resp = await axios
      .put('http://localhost:3000/todos', { task })
      .catch(console.error);

    if (!resp) {
      alert('TodoService: Could not save new todo.');
      return;
    }

    if (!isTodo(resp.data)) {
      console.error('Got invalid todo');
      return;
    }

    this.state.todos = [...this.state.todos, resp.data];
  }

  public async toggleDone(todo: Todo): Promise<void> {
    const resp = await axios
      .patch(`http://localhost:3000/todos/${todo.id}`)
      .catch(console.error);

    if (!resp) {
      alert('TodoService: Could not toggle done of todo.');
      return;
    }

    await this.loadTodos();
  }

  public async deleteTodo(todo: Todo): Promise<void> {
    const resp = await axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .catch(console.error);

    if (!resp) {
      alert('TodoService: Could not delete todo.');
      return;
    }

    await this.loadTodos();
  }
}

const todosService = new TodoService();

export {
  todosService,
};
