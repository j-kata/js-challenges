import { toggle } from '.';

describe('toggle', () => {
  test('returns a function', () => {
    const t = toggle('red', 'yellow', 'green');
    expect(t).toBeInstanceOf(Function);
  });

  test('iterates through values', () => {
    const lights = toggle('red', 'yellow', 'green');
    expect(lights()).toBe('red');
    expect(lights()).toBe('yellow');
    expect(lights()).toBe('green');
  });

  test('wraps in a cycle', () => {
    const upDown = toggle('up', 'down');
    expect(upDown()).toBe('up');
    expect(upDown()).toBe('down');
    expect(upDown()).toBe('up');
    expect(upDown()).toBe('down');
  });
});
