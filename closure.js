/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function’s scope from an inner function.
 */

function makeCounter() {
  // Lexical Scope
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    value: function () {
      return count;
    },
  };
}

const counter = makeCounter();

console.log("Initial counter value:", counter.value());

counter.increment();
counter.increment();

console.log("Counter value after two increments:", counter.value());

counter.decrement();

console.log("Counter value after one decrement:", counter.value());
