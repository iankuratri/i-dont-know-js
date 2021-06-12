/**
 * Currying
 *
 * Currying is a transformation of functions that translates
 * a function from callable as f(a, b, c) into callable as f(a)(b)(c)
 *
 * It allows us to take a fn that has N arguments and
 * convert it to a fn that have only 1 agrument
 * N => 1
 */

// Before currying
function sum(a, b, c) {
  return a + b + c;
}

const total1 = sum(3, 5, 7);
console.log(total1);

// After currying
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const total2 = add(3)(5)(7);
console.log(total2);
