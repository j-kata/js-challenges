export function counter(initialValue = 0) {
  let value = initialValue;
  return () => value++;
}

export function customCounter(initialValue = 0) {
  let value = initialValue;
  return {
    retrieve: () => value,
    increment: (newVal = 1) => {
      (value += newVal), newVal;
    },
  };
}

export function toggle(...values) {
  let index = -1;
  const length = values.length;

  return () => {
    index = ++index % length;
    return values[index];
  };
}

/**
 * without recursion; sum() returns 0
 */

export function sum(num) {
  let accum = 0;
  const store = (val) => {
    if (val == undefined) {
      return accum;
    } else {
      accum += val;
      return store;
    }
  };
  return store(num);
}

/**
 * with recursion; sum() returns [Function (anonymous)]
 */

// export function sum(num) {
//   return (val) => (val == undefined ? num : sum(num + val));
// }

export function once(callback) {
  let called = false;

  return function (...values) {
    if (called) return;
    called = true;
    return callback(...values);
  };
}
