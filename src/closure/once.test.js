import { once, toggle } from '.';

describe('once', () => {
  describe('callback with no parameters', () => {
    test('returns expected result on a first call', () => {
      const upDown = toggle('up', 'down');
      const onlyUp = once(upDown);
      expect(onlyUp()).toBe('up');
    });

    test('returns same result on every call', () => {
      const upDown = toggle('up', 'down');
      const onlyUp = once(upDown);
      expect(onlyUp()).toBe('up');
      expect(onlyUp()).toBe();
      expect(onlyUp()).toBe();
    });
  });
  const accum = (initial = 0) => {
    let result = initial;
    return function (newVal) {
      return (result += newVal);
    };
  };

  describe('callback with parameters', () => {
    test('returns expected result on a first call', () => {
      const sum = accum(10);
      const onceAccum = once(sum);
      expect(onceAccum(5)).toBe(15);
    });

    test('returns same result on every call', () => {
      const sum = accum(10);
      const onceAccum = once(sum);
      expect(onceAccum(5)).toBe(15);
      expect(onceAccum(5)).toBe();
      expect(onceAccum(5)).toBe();
    });
  });
});
