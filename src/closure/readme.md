# Closure

### Counter

Implement a function that accepts an optional initial value (integer) and returns a function. The returned function can be called repeatedly to return 1 + the return value of the previous invocation.

```
  const c = counter(10);
  counter(); // 10
  counter(); // 11
  counter(); // 12
```

---

### Toggle

Implement a function that alternates between all the passed values each time it is called.

```
   const upDown = toggle('up', 'down');
   upDown(); // 'up'
   upDown(); // 'down'
   upDown(); // 'up'
```
