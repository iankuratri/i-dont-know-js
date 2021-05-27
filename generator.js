/**
 * Generators
 *
 * Regular functions return only one, single value (or nothing).
 *
 * Generators can return (“yield”) multiple values, one after another, on-demand.
 * They work great with iterables, allowing to create data streams with ease.
 */

/**
 * Generator functions
 *
 * To create a generator, we need a special syntax construct: function*,
 * so-called “generator function”.
 *
 * It looks like this:
 */

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

/**
 * Generator functions behave differently from regular ones.
 * When such function is called, it doesn’t run its code.
 * Instead it returns a special object, called “generator object”,
 * to manage the execution.
 *
 * Here, take a look:
 */

const sequence = generateSequence();

/**
 * The main method of a generator is next().
 * When called, it runs the execution until the nearest yield <value> statement (value can be omitted,
 * then it’s undefined). Then the function execution pauses, and the yielded value is returned to the outer code.
 *
 * The result of next() is always an object with two properties:
 *
 * value: the yielded value.
 * done: true if the function code has finished, otherwise false.
 */

console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());

/**
 * Generators are iterable
 *
 * As you probably already guessed looking at the next() method, generators are iterable.
 *
 * We can loop over their values using for..of:
 */

function* lyrics() {
  yield "Found you when your heart was broke";
  yield "I filled your cup until it overflowed";
  yield "Took it so far to keep you close (keep you close)";
  yield "I was afraid to leave you on your own";
}

const sing = lyrics();

for (let line of sing) {
  console.log(line);
}

/**
 * Loop using generator function
 */
const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

function* loop(arr) {
  for (const todo of arr) {
    yield todo;
  }
}

const todo = loop(todos);

console.log(todo.next());
console.log(todo.next());
console.log(todo.next());
