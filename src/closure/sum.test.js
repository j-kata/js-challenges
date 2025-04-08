import { sum } from '.';

describe('sum', () => {
  describe('with an argument', () => {
    test('returns a function', () => {
      expect(sum(4)).toBeInstanceOf(Function);
    });

    test('allows for repeated calling', () => {
      expect(sum(4)(3)(2)).toBeInstanceOf(Function);
    });
  });

  describe('without an argument', () => {
    test('returns 0 when called first', () => {
      expect(sum()).toBe(0);
    });

    // test('returns function when called first', () => {
    //   expect(sum()).toBeInstanceOf(Function);
    // });

    test('returns previous number when called second', () => {
      expect(sum(5)()).toBe(5);
    });

    test('returns a sum when called after several calls', () => {
      expect(sum(1)(2)(3)(4)()).toBe(10);
    });
  });
});
