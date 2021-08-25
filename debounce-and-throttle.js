/**
 * Problem statement
 *
 * Implement debounce and throttle functions using setTimeout
 */

/**
 * What are they?
 *
 * Debouncing and throttling are techniques to enhance your website performance,
 * prevent you from making unnecesary API calls and piling up th load on the server.
 *
 * How do they do that?
 *
 * Debouncing and throttling techniques limit the number of times a function can
 * execute. Eg: Functions attached to mouse move, window resize, auto complete keyup.
 *
 * This technique of limiting the number of times the user can call a function attached
 * to an event listener is debouncing and throttling.
 */

/**
 * Debouncing vs Throttling
 *
 * Throttling is a technique in which, no matter how many times the user fires the
 * event, the attached function will be executed only once in a given time interval.
 *
 * Debouncing is a technique in which no matter how many times the user fires the event,
 * the attached function will be executed only after the specified time once the user
 * stops firing the event.
 *
 * 1. Consider you asking your parents for a chocolate.
 *
 * 2. With throttling, irrespective of how many times you ask, you are given one chocolate per hour.
 *
 * 3. With debouncing, you are given a chocolate only if you're silent for an hour.
 */

// Implement throttle function
function throttle(fn, time) {
  let throttled = false;

  return function () {
    if (!throttled) {
      fn.apply(this, arguments);
      throttled = true;

      setTimeout(() => {
        throttled = false;
      }, time);
    }
  };
}

const logger = (args) => {
  console.log("Log data :", args);
};

const throttledLogger = throttle(logger, 100);

throttledLogger(1);
throttledLogger(2);
throttledLogger(3);

setTimeout(() => {
  throttledLogger(4);
  throttledLogger(5);
}, 200);

// Implement debounce function
function debounce(fn, wait) {
  let timer;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

const debounceLogger = debounce(logger, 200);

debounceLogger(6);
debounceLogger(7);
debounceLogger(8);

setTimeout(() => {
  debounceLogger(9);
  debounceLogger(10);
}, 300);
