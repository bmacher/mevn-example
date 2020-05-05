import { Todo, isTodo } from './todo';

describe('todo', () => {
  it('should return true', () => {
    const todo = {
      id: 1,
      task: 'New todo',
      done: false,
    };

    expect(isTodo(todo)).toBe(true);
  });

  it('should return false', () => {
    const todo = {
      id: 1,
      task: 'New todo',
    };

    expect(isTodo(<Todo>todo)).toBe(false);
  });

  it('should return false', () => {
    const todo = {
      id: 1,
      done: false,
    };

    expect(isTodo(<Todo>todo)).toBe(false);
  });
});
