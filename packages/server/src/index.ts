import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Todo } from '@mevn/common';

const app = express();

app
  .use(cors())
  .use(bodyParser.json());

// Local "storage"
let currentId = 1;
let todos: Todo[] = [];

app.get('/todos', (req, res) => {
  if (todos.length > 0) {
    res.send(todos);
    console.info('GET: %o', todos);
  } else {
    res.sendStatus(204);
  }
});

app.put('/todos', (req, res) => {
  const { task } = req.body;

  if (!task || task !== '') {
    const newTodo = {
      id: currentId,
      task,
      done: false,
    };
    currentId += 1;

    todos = [...todos, newTodo];
    console.info('PUT: %o', newTodo);

    res.status(201).send(newTodo);
  } else {
    res.status(400).send('Body is missing task');
  }
});

app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(({ id }) => id === Number(req.params.id));

  if (todo) {
    todo.done = !todo.done;
    console.info('PATCH: %o', todo);

    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});

app.delete('/todos/:id', (req, res) => {
  const todo = todos.find(({ id }) => id === Number(req.params.id));

  if (todo) {
    todos = todos.filter((_todo) => _todo !== todo);
    console.info('DELETE: %o', todo);

    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});

const server = app.listen(3000, () => {
  console.info('Server: http://localhost:3000');
});

export { server };
