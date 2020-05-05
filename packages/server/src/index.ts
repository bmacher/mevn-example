import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Todo, isTodo } from '@mevn/common';

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
  } else {
    res.sendStatus(204);
  }
});

app.put('/todos', (req, res) => {
  const { body } = req;

  console.info(body);

  if (isTodo(body)) {
    todos = [...todos, { id: currentId, ...body }];
    currentId += 1;

    res.sendStatus(200);
  } else {
    res
      .status(400)
      .send('Invalid body');
  }
});

app.delete('/todos/:id', (req, res) => {
  const todo = todos.find(({ id }) => id === Number(req.params.id));

  if (todo) {
    todos = todos.filter((_todo) => _todo !== todo);
    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
});

const server = app.listen(3000, () => {
  console.info('Server: http://localhost:3000');
});

export { server };
