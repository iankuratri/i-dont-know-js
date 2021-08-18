/**
 * Introduced in ES6
 * What iterables and iterators are in JavaScript?
 */

// ----------------------------------------------------------------------------------------------

/**
 * 1. Why something like iterables and iterators were introduced?
 *
 * In ES6, iterables and iterators were introduced to process a sequence of data more efficently.
 *
 * Iterables & Iterators make it possible to access data from a collection one at a time which
 * will allow us to focus on what to do with that data rather than how to access that data.
 *
 * JavaScript did not have the best looping constructs for iterating over a collection of data
 * and there was a need to introduce a better iteration protocol.
 */

/**
 * Iteration in JavaScript before ES6
 *
 * 1. for loop
 * 2. while loop
 * 3. do-while loop
 */

// Looping over a string before ES6:
const str = "Ankur Atri";

for (let indexOne = 0; indexOne < str.length; indexOne++) {
  console.log(str.charAt(indexOne));
}

let indexTwo = 0;
while (indexTwo < str.length) {
  console.log(str.charAt(indexTwo));
  indexTwo++;
}

let indexThree = 0;
do {
  console.log(str.charAt(indexThree));
  indexThree++;
} while (indexThree < str.length);

// Looping over an array before ES6:
const arr = [1, 2, 3, 4, 5];

for (let indexFour = 0; indexFour < arr.length; indexFour++) {
  console.log(arr[indexFour]);
}

let indexFive = 0;
while (indexFive < arr.length) {
  console.log(arr[indexFive]);
  indexFive++;
}

let indexSix = 0;
do {
  console.log(arr[indexSix]);
  indexSix++;
} while (indexSix < arr.length);

/**
 * Difficulties for a beginner:
 *
 * 1. To apply some functionality on each element,
 * we need to figure out how to access that element.
 *
 * 2. Difficult to manage iteration on various types of data structures.
 *
 * There was a need:
 *
 * 1. To iterate over various data structures in a new way that abstracts
 * away the complexity of accessing elements one by one.
 *
 * 2. To iterate in a uniform way across data structures.
 */

// -------------------------------------------------------------------------------------------

/**
 * 2. What exactly is an iterable and an iterator?
 */

/**
 * In ES6, two new iteration protocols were introduced.
 *
 * The iterable protocol and the iterator protocol.
 *
 * An object which implements the iterable protocol is called an iterable.
 *
 * An object which implements the iterator protocol is called an iterator.
 *
 * We have to understand the iterable and the iterator protocol.
 */

/**
 * Iterables and iterators in simple terms
 *
 * An iterable is a data structure that wants to make its elements accessible to the public.
 *
 * An iterator is an object that knows how to access items from a collection one at a time
 * while keeping track of its current position within that sequence.
 */

/**
 * Built-in Iterables
 *
 * Strings, arrays, maps and sets are termed as built-in iterables in JavaScript.
 *
 * There is a way to access elements one at a time from these data structures.
 *
 * How to iterate over these data structures?
 *
 * We canont modify the looping constructs we already have.
 *
 * A new looping construct, namely a for..of loop would be introduced in ES6.
 *
 * for..of loop will be used to iterate over iterables in JavaScript.
 */

// for..of loop

/**
 * A for..of loop with a string will iterate over the characters in the string.
 */

const strOne = "Abc def ghi";

for (const char of strOne) {
  console.log(char);
}

/**
 * A for..of loop with an array will iterate over the items in the array.
 */

const arrOne = [1, 2, 3, 4, 5];

for (const element of arrOne) {
  console.log(element);
}

/**
 * A for..of loop with a map will iterate over the key/value pairs of the map.
 */

const groceries = new Map([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

for (const [key, value] of groceries) {
  console.log(key + " = " + value);
}

/**
 * A for..of loop with a set will iterate over the values in the set.
 */

let fruits = new Set(["oranges", "apples", "bananas"]);

for (let value of fruits) {
  console.log(value);
}

/**
 * Iterable Protocol - Technical details
 *
 * This protocol decides if an object is an iterable
 *
 * For an object to be an iterable it must implement a method at the key [Symbol.iterator]
 *
 * That method should not accept any argument and should return an object which conforms to the iterator protocol.
 */

/**
 * [Symbol.iterator]
 *
 * [Symbol.iterator], is one of the built-in well-known symbols in ES6
 *
 * Symbol.iterator basically guarantees a unique value for your object key which will not
 * collide with any of the keys that you might mention
 */

/**
 * Iterator Protocol - Technical details
 *
 * The iterator protocol decides whether an object is an iterator.
 *
 * An object is an iterator when it satisfies the following rule:
 *
 * The object must have a next() method that returns an object with two properties.
 * 1. value: which gives the current element
 * 2. done: which is a boolean value indicating whether or not there are any more
 * elements that could be iterated upon
 *
 * Each time you call the next() method, it returns the next value in the collection
 * { value: 'next value', done: false } // till the last element has been returned
 * { value: undefined, done: true } // after the last element has been returned
 */

/**
 * 3. Implement our own iterable and iterator
 */

// returns function
console.log("typeof str[Symbol.iterator]: ", typeof str[Symbol.iterator]);

// returns function
console.log("typeof arr[Symbol.iterator]: ", typeof arr[Symbol.iterator]);

const person = {
  name: "Ankur",
  age: 26,
};

// returns undefined -> that means an object is not a build in iterable
console.log("typeof person[Symbol.iterator]: ", typeof person[Symbol.iterator]);

/**
 * By making our object implement the iterable protocol,
 * we can make our object into an iterable
 *
 * The iterable protocol gives you the possibility
 * to iterate over nay type of data structure
 */

// Implementing iterable protocol
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// Logs 'Hello' 'World'
for (const iterator of obj) {
  console.log(iterator);
}
