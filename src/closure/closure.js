export function counter(initialValue = 0) {
  let value = initialValue;
  return () => value++;
}
