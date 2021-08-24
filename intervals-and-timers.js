/**
 * setTimeout
 *
 * allows us to run a function once after the interval of time.
 */

function sayHi() {
  console.log("Hi");
}

setTimeout(sayHi, 100);

function sayHello(name) {
  console.log(`Hello ${name}`);
}

setTimeout(sayHello, 200, "Ankur");

const sayHelloAgain = setTimeout(sayHello, 300, "Ankur");

// above timeout will be cleared before execution
clearTimeout(sayHelloAgain);

/**
 * setInterval
 *
 * allows us to run a function repeatedly,
 *
 * starting after the interval of time, then repeating continuously at that interval.
 */

function sayBye() {
  console.log("Tata");
}

setInterval(sayBye, 10000);

// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log("tick"), 2000);

// after 5 seconds stop
setTimeout(() => {
  clearInterval(timerId);
  console.log("stop");
}, 5000);

/**
 * setInterval with immediate call functionality
 */
function setImmediateInterval(funcToRun, delay) {
  // right away call that function
  funcToRun();

  // run a regular interval
  return setInterval(funcToRun, delay);
}

setImmediateInterval(sayBye, 20000);

/**
 * Noteworthy points
 *
 * 1. Timers and intervals are not part of JavaScript itself. They are implemented
 * by the browser. setTimeout and setInterval are basically names given to that
 * functionality in JavaScript.
 *
 * 2. Duration parameter is the minimum delay, not guaranteed delay.
 *
 * 3. It is possible to achieve the same effect as setInterval with a recursive setTimeout.
 */

/**
 * Recursive setTimeout
 *
 * 1. Duration is guaranteed between executions.
 *
 * Irrespective of how long the code takes to run, the interval will remain the same.
 *
 * You can calculate a different delay before running each iteration.
 */

setTimeout(function run() {
  console.log("setTimeout - yolo");
  setTimeout(run, 100);
}, 100);

/**
 * setInterval - to achieve same functionality as above
 *
 * 1. The duration interval includes the time taken to execute the code you want to run.
 *
 * The code takes 40ms to run, the interval is 60 ms.
 *
 * The code takes 50ms to run, the interval is 50 ms.
 */

setInterval(function run() {
  console.log("setInterval - yolo");
}, 100);
