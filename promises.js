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
