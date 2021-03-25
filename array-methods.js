/**
 * Array.from()
 *
 * The Array.from() static method creates a new, shallow-copied
 * Array instance from an array-like or iterable object.
 */

function sum() {
  // arguments are Symbol (Symbol.iterator) instead of array here
  console.log("Are arguments an array: ", Array.isArray(arguments));

  const numbers = Array.from(arguments);
  return numbers.reduce((total, current) => total + current, 0);
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("Total is: ", total);

/**
 * Array.of()
 *
 * The Array.of() method creates a new Array instance from a variable
 * number of arguments, regardless of number or type of the arguments.
 */

const numArray = Array.of(1, 2, 3, "a", "b", "c");
console.log(numArray);
// expected output: [ 1, 2, 3, 'a', 'b', 'c' ]
