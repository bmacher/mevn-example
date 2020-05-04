import { describe, it, expect } from '@jest/globals';
import http from 'http';
import { server } from '.';

describe('express server', () => {
  afterAll(() => {
    server.close();
  });

  it('should expose GET / -> Hello World!', (done) => {
    http.get('http://localhost:3000', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        expect(data).toBe('Hello World!');
        if (done) done();
      });
    });
  });
});
