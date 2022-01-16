import { greeter } from '../src/main';

test('Greeter should return greetings', () => {
  expect(greeter('World')).toBe('Hello, World');
});
