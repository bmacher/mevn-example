import express from 'express';
import cors from 'cors';
import { sayHello } from '@mevn/common';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(sayHello('World'));
});

const server = app.listen(3000, () => {
  console.info('Server: http://localhost:3000');
});

export { server };
