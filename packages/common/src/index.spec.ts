import { describe, it, expect } from '@jest/globals';
import { sayHello } from '.';

describe('sayHello', () => {
  it('should return "Hello World!', () => {
    expect(sayHello('World'))
      .toBe('Hello World!');
  });
});
