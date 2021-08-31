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

/**
 Array.prototype.splice()

 The splice() method changes the contents of an array by removing or 
 replacing existing elements and/or adding new elements in place.

 splice(startIndex, deleteCount, itemToAdd)
 */

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

/**
 Array.prototype.slice()

 The slice() method returns a shallow copy of a portion of an array into a new array 
 object selected from start to end (end not included) where start and end represent 
 the index of items in that array. 
 
 The original array will not be modified.

 slice(startIndex, endIndex) -> endIndex not included
*/

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
