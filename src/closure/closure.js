export function counter(initialValue = 0) {
  let value = initialValue;
  return () => value++;
}

export function toggle(...values) {
  let index = -1;
  const length = values.length;

  return () => {
    index = ++index % length;
    return values[index];
  };
}
