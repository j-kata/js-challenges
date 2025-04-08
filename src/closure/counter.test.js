import { counter } from '.';

describe('counter', () => {
  test('returns a function', () => {
    const c = counter();
    expect(c).toBeInstanceOf(Function);
  });

  describe('initial call', () => {
    test('returns default value', () => {
      const c = counter();
      expect(c()).toBe(0);
    });

    test('returns initial value', () => {
      const c = counter(100);
      expect(c()).toBe(100);
    });
  });

  describe('subsequent calls', () => {
    test('starting from default value', () => {
      const c = counter();
      expect(c()).toBe(0);
      expect(c()).toBe(1);
      expect(c()).toBe(2);
    });

    test('starting from initial value', () => {
      const c = counter(10);
      expect(c()).toBe(10);
      expect(c()).toBe(11);
      expect(c()).toBe(12);
    });
  });

  test('isolated', () => {
    const c1 = counter(1),
      c2 = counter(2);
    expect(c1()).toBe(1);
    expect(c2()).toBe(2);
    expect(c1()).toBe(2);
    expect(c2()).toBe(3);
  });
});
