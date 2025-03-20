import { customCounter } from './closure';

describe('custom counter', () => {
  test('returns an object', () => {
    const counter = customCounter();
    expect(counter && typeof counter === 'object').toBe(true);
  });

  describe('initial call', () => {
    test('returns default value', () => {
      const counter = customCounter();
      expect(counter.retrieve()).toBe(0);
    });

    test('returns initial value', () => {
      const counter = customCounter(100);
      expect(counter.retrieve()).toBe(100);
    });
  });

  describe('subsequent increment', () => {
    describe('by default value', () => {
      test('starting from default value', () => {
        const counter = customCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        expect(counter.retrieve()).toBe(3);
      });

      test('starting from initial value', () => {
        const counter = customCounter(11);
        counter.increment();
        counter.increment();
        expect(counter.retrieve()).toBe(13);
      });
    });

    describe('by various values', () => {
      test('starting from default value', () => {
        const counter = customCounter();
        counter.increment(2);
        counter.increment(3);
        counter.increment(5);
        expect(counter.retrieve()).toBe(10);
      });

      test('starting from initial value', () => {
        const counter = customCounter(15);
        counter.increment(4);
        counter.increment(1);
        expect(counter.retrieve()).toBe(20);
      });
    });
  });

  test('isolated', () => {
    const counter1 = customCounter(),
      counter2 = customCounter(2);
    counter1.increment();
    counter2.increment(19);
    counter1.increment(4);
    counter2.increment();
    expect(counter1.retrieve()).toBe(5);
    expect(counter2.retrieve()).toBe(22);
  });

  test('with negative and positive values', () => {
    const counter = customCounter();
    counter.increment();
    counter.increment(-4);
    expect(counter.retrieve()).toBe(-3);
    counter.increment(5);
    counter.increment();
    counter.increment(-3);
    expect(counter.retrieve()).toBe(0);
  });
});
