/**
 * Math
 *
 * Math is a built-in object that has properties and methods for mathematical
 * constants and functions. It’s not a function object.
 *
 * Math works with the Number type. It doesn't work with BigInt.
 */

/**
 * Math.round()
 *
 * The Math.round() function returns the value of a number rounded to the nearest integer.
 */

console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// expected output: -5 -5 -6

/**
 * Math.ceil()
 *
 * The Math.ceil() function always rounds a number up to the next largest integer.
 *
 * Note: Math.ceil(null) returns integer 0 and does not give a NaN error.
 */

console.log(Math.ceil(0.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

/**
 * Math.floor()
 *
 * The Math.floor() function returns the largest integer less than or equal to a given number.
 */

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5.000001));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6

/**
 * Math.trunc()
 *
 * The Math.trunc() function returns the integer part of a number by removing any fractional digits.
 */

console.log(Math.trunc(13.37));
// expected output: 13

console.log(Math.trunc(42.84));
// expected output: 42

console.log(Math.trunc(0.123));
// expected output: 0

console.log(Math.trunc(-0.123));
// expected output: -0
