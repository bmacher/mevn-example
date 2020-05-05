import { Todo, isTodo } from './todo';

describe('isTodo', () => {
  it('should return true when todo is valid', () => {
    const todo = {
      id: 1,
      task: 'New todo',
      done: false,
    };

    expect(isTodo(todo)).toBe(true);
  });

  it('should return false when missing "done"', () => {
    const todo = {
      id: 1,
      task: 'New todo',
    };

    expect(isTodo(<Todo>todo)).toBe(false);
  });

  it('should return false when missing "task"', () => {
    const todo = {
      id: 1,
      done: false,
    };

    expect(isTodo(<Todo>todo)).toBe(false);
  });
});
