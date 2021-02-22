/**
 * setTimeout allows us to run a function once after the interval of time.
 */

function sayHi() {
  console.log("Hello");
}

setTimeout(sayHi, 100);

/**
 * setInterval allows us to run a function repeatedly,
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
