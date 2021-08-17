/**
 * Introduced in ES6
 * What iterables and iterators are in JavaScript?
 */

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

/**
 * 2. What exactly is an iterable and an iterator?
 */

/**
 * 3. Implement our own iterable and iterator
 */
