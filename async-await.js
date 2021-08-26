/**
 * async await
 *
 * The async and await keywords enable asynchronous,
 * promise-based behaviour to be written in a cleaner style,
 * avoiding the need to explicitly configure promise chains
 */

/**
 * async
 *
 * The async keyword is used to declare async functions
 *
 * Async functions are functions that are instance of the AsyncFunction constructor
 *
 * Unlike normal functions, async functions always return a promise
 */

// Normal function
function greet() {
  return "Hello";
}

console.log(greet());

// Async function
async function greetAgain() {
  return "Hello";
}

// returns a promise
console.log(greetAgain());

async function greetPromise() {
  return Promise.resolve("Hello");
}

greetPromise().then((value) => console.log(value));

/**
 * await
 *
 * await keyword can be put infront of any async promise based function to
 * pause your code until that promise settles and returns its result.
 *
 * await only works inside async functions. Cannot use await in normal functions.
 */

async function sayHi() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hi User", 1000));
  });

  let result = await promise;

  console.log(result);
}

sayHi();

/**
 * Sequential vs concurrent vs parallel execution
 */

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}

/**
 * Sequential execution
 */
async function sequentialStart() {
  console.time("sequentialStart");

  const hello = await resolveHello();
  console.log(hello); // Logs after 2 seconds

  console.timeLog("sequentialStart");

  const world = await resolveWorld();
  console.log(world); // Logs after 2 (for resolveHello) + 1 (for resolveWorld) = 3 seconds

  console.timeEnd("sequentialStart");
}

// Total time taken is 3 seconds
sequentialStart();

/**
 * Concurrent execution
 */
async function concurrentStart() {
  console.time("concurrentStart");

  const hello = resolveHello();
  const world = resolveWorld();

  console.log(await hello); // Logs after 2 seconds
  console.log(await world); // Logs after 2 seconds

  console.timeEnd("concurrentStart");
}

// Total time taken is 2 seconds
concurrentStart();

/**
 * Parallel execution
 */
async function parallelStart() {
  console.time("parallelStart");

  await Promise.all([
    (async () => console.log(await resolveHello()))(), // Logs after 2 seconds
    (async () => console.log(await resolveWorld()))(), // Logs after 2 seconds
  ]);

  console.log("Finally");

  console.timeEnd("parallelStart");
}

// Total time taken is 2 seconds
parallelStart();

/**
 * Exercise - async await
 *
 * Problem
 *
 * Define a function called sleep which accepts a duration parameter
 * The sleep function should suspend execution of the function it is invoked in
 */

function sleep(duration = 0) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

const makePizza = async () => {
  console.log("I am making a Pizza. It will take 10 seconds.");
  await sleep(10 * 1000);
  console.log("Pizza is ready.");
};

makePizza();
