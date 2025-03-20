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

### Counter 2

Implement a function that accepts an optional initial value (integer) and returns an object with methods to increment and retrieve the value.

```
  const counter = customCounter(5);
  counter.increment(-8); // -3
  counter.increment(2); // -1
  counter.increment(); // 0
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
