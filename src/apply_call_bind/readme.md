# Apply, Call, Bind

### Polyfill for bind function

Write a polyfill for bind function which creates a new function that, when called, has its this keyword set to the provided context.

```
  function greet(hello, title) {
    return `${hello}, ${title}${this.name}`;
  }

  const person = { name: 'Alex' };
  const greetAlex = greet.myBind(person, 'Hej');

  console.log(greetAlex('Mr. ')); // 'Hej, Mr. Alex!'
```
