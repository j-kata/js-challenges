export function myBind(context, ...args) {
  const func = this;
  return function () {
    return func.call(context, ...args, ...arguments);
  };
}
