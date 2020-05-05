export interface Todo {
  id: number;
  task: string;
  done: boolean;
}

export function isTodo(todo: Todo): todo is Todo {
  return !!todo.task && todo.done !== undefined;
}
