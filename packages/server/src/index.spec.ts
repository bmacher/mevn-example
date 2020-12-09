import {
  describe, test, expect, beforeAll, afterAll,
} from '@jest/globals';
import axios from 'axios';
import { Todo } from '@mevn/common';
import { server } from '.';

describe('IntegrationTest: express server', () => {
  let info: any;

  beforeAll(() => {
    info = console.info;
    console.info = () => { };
  });

  afterAll(() => {
    server.close();
    console.info = info;
  });

  test('GET /todos should respond 204', async () => {
    const resp = await axios.get('http://localhost:3000/todos');

    expect(resp.status).toBe(204);
  });

  test('PUT /todos should respond 201 and new todo', async () => {
    const resp = await axios.put(
      'http://localhost:3000/todos',
      { task: 'New Todo' },
    );

    expect(resp.status).toBe(201);
    expect(resp.data).toEqual(<Todo>{
      id: 1,
      task: 'New Todo',
      done: false,
    });
  });

  test('PUT /todos should respond 400 and "Body is missing task"', async () => {
    try {
      await axios.put(
        'http://localhost:3000/todos',
        {},
      );
    } catch ({ response }) {
      expect(response.status).toBe(400);
      expect(response.data).toBe('Body is missing task');
    }
  });

  test('GET /todos should respond 200 and array with new todo', async () => {
    const resp = await axios.get('http://localhost:3000/todos');

    expect(resp.status).toBe(200);
    expect(resp.data).toEqual(<Todo[]>[{
      id: 1,
      task: 'New Todo',
      done: false,
    }]);
  });

  test('PATCH /todos/1 should respond 200', async () => {
    const resp = await axios.patch('http://localhost:3000/todos/1');

    expect(resp.status).toBe(200);
  });

  test('PATCH /todos/999 should respond 204', async () => {
    const resp = await axios.patch('http://localhost:3000/todos/999');

    expect(resp.status).toBe(204);
  });

  test('DELETE /todos/1 should respond 200', async () => {
    const resp = await axios.delete('http://localhost:3000/todos/1');

    expect(resp.status).toBe(200);
  });

  test('DELETE /todos/999 should respond 204', async () => {
    const resp = await axios.delete('http://localhost:3000/todos/999');

    expect(resp.status).toBe(204);
  });

  test('GET /todos should respond 204 again', async () => {
    const resp = await axios.get('http://localhost:3000/todos');

    expect(resp.status).toBe(204);
  });
});
