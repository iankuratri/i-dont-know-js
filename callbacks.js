/**
 * Callbacks
 *
 * In JavaScript, functions are first class objects
 *
 * 1. Just like an object, a function can be passed as an argument to a function.
 *
 * 2. A function can also be returned as values from other functions.
 *
 * 3. A function that is passed as an argument to another function is called a
 * callback function in JavaScript.
 *
 * 4. The function which accepts a function as an argument or returns a function
 * is called higher order function.
 */

/**
 * Why do we need callbacks?
 *
 * Synchronous callbacks vs Asynchronous callbacks
 */

/**
 * Synchronous callbacks
 *
 * A callback which is executed immediately is called a synchronous callback.
 *
 * For eg: callback fn's passed in map, filter, reduce etc.
 */

function greet(name) {
  console.log(`Hello ${name}`);
}

function greetUser(greetFn) {
  const user = "Ankur";
  greetFn(user);
}

greetUser(greet);

/**
 * Asynchronous callbacks
 *
 * An asynchronous callback is a callback that is often used to continue or
 * resume code execution after an asynchronous operation has completed.
 *
 * Callbacks are used to delay the execution of a function until a particular
 * time or event has occured.
 *
 * Data fetching takes time and we can only run the function we want to after
 * the data has been fetched and not immediately.
 *
 * For eg: callback fn's passed in setTimeout, setInterval,
 * event handlers: addEventListener, fetch: data fetching from API etc.
 */

setTimeout(greet, 2000, "Batman");

/**
 * Problem with the callbacks pattern (callback hell)
 *
 * If you have multiple callback functions where each level depends on the result
 * obtained from the previous level, the nesting of functions becomes so deep that
 * the code becomes difficult to read and maintain.
 *
 * To tackle the problem of callback hell, promises are introduced in ES6.
 */
