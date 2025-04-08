# Generators

### Number Sequence Rabbit Hole

Write a function that can return an infinite stream of values representing the number of triangular numbers between successive squares.

Square numbers: 1, 4, 9, 16, 25, ... --> formula: x \* x
Triangular numbers: 1, 3, 6, 10, 15, 21, ... --> formula: (x \* (x + 1)) / 2

When a number appears in both sequences (e.g. 1, 36), the square value always precedes the triangular.

```
  const take = length => xs => Array.from( { length }, () => xs.next().value ) ;
  take(10)(specialSequence()); // [2,1,2,1,1,2,1,2,1,2];
```
