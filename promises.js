/**
 * Promises
 *
 * The Promise object represents the eventual completion (or failure)
 * of an asynchronous operation and its resulting value.
 *
 * A Promise is a proxy for a value not necessarily known when the promise is created.
 * It allows you to associate handlers with an asynchronous action's eventual
 * success value or failure reason.
 *
 * A Promise is in one of these states:
 *
 * 1. pending: initial state, neither fulfilled nor rejected.
 *
 * 2. fulfilled: meaning that the operation was completed successfully.
 *
 * 3. rejected: meaning that the operation failed.
 */

/**
 * Why Promises?
 *
 * Promises help us deal with asynchronous code in a far more
 * simpler way compared to callbacks.
 *
 * Callback hell can be avoided with Promises.
 */

const cookPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Change status from pending to fulfilled
    resolve("Pizza is here.");
  }, 1000);
});

cookPizza.then((value) => console.log(value));

const cookGarlicBread = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Change status from pending to rejected
    reject(new Error("We don't have bread."));
  }, 2000);
});

cookGarlicBread.catch((err) => console.log(err));

/**
 * Both then and catch methods return promises
 *
 * then() and catch() methods can be chained in JavaScript
 */

/**
 * Promise - Static methods
 */

/**
 * Promise.all()
 *
 * The Promise.all() method takes an iterable of promises as an input, and returns
 * a single Promise that resolves to an array of the results of the input promises.
 *
 * This returned promise will resolve when all of the input's promises have resolved,
 * or if the input iterable contains no promises.
 *
 * It rejects immediately upon any of the input promises rejecting or non-promises
 * throwing an error, and will reject with this first rejection message / error.
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

/**
 * Promise.allSettled()
 *
 * The Promise.allSettled() method returns a promise that resolves after all of
 * the given promises have either fulfilled or rejected, with an array of objects
 * that each describes the outcome of each promise.
 */

const promise4 = Promise.resolve(3);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise4, promise5];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);

// expected output:
// { status: 'fulfilled', value: 3 }
// { status: 'rejected', reason: 'foo' }

/**
 * Promise.race()
 *
 * The Promise.race() method returns a promise that fulfills or rejects as soon as
 * one of the promises in an iterable fulfills or rejects, with the value or reason
 * from that promise.
 */

const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise6, promise7]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
