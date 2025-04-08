import { myBind } from '.';

Function.prototype.myBind = myBind;
const person = { name: 'Alex' };

function hello() {
  return `Hello, ${this.name}`;
}
function greet(hello) {
  return `${hello}, ${this.name}`;
}
function greetWithTitle(hello, title) {
  return `${hello}, ${title}${this.name}`;
}

describe('myBind', () => {
  test('no arguments', () => {
    const helloAlex = hello.myBind(person);
    expect(helloAlex()).toBe('Hello, Alex');
  });

  describe('with arguments', () => {
    test('with pre-filled arguments', () => {
      const greetAlex = greet.myBind(person, 'Hej');
      expect(greetAlex()).toBe('Hej, Alex');
    });

    test('without pre-filled arguments', () => {
      const greetAlex = greet.myBind(person);
      expect(greetAlex('Hej')).toBe('Hej, Alex');
    });

    test('partial application', () => {
      const greetAlex = greetWithTitle.myBind(person, 'Hej');
      expect(greetAlex('Mr. ')).toBe('Hej, Mr. Alex');
    });

    test('another context', () => {
      const greetEva = greetWithTitle.myBind({ name: 'Eva' }, 'Hi');
      expect(greetEva('Ms. ')).toBe('Hi, Ms. Eva');
    });
  });
});
