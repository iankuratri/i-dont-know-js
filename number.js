/**
 * Number
 *
 * Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
 *
 * The Number constructor contains constants and methods for working with numbers.
 * Values of other types can be converted to numbers using the Number() function.
 *
 * A number literal like 37 in JavaScript code is a floating-point value, not an integer.
 * There is no separate integer type in common everyday use. (JavaScript now has a BigInt type,
 * but it was not designed to replace Number for everyday uses. 37 is still a Number, not a BigInt.)
 *
 * Number may also be expressed in literal forms like 0b101, 0o13, 0x0A.
 *
 * When used as a function, Number(value) converts a string or other value to the Number type.
 * If the value can't be converted, it returns NaN.
 */

/**
 * Number.isFinite()
 *
 * The Number.isFinite() method determines whether the passed value is a finite number — that is,
 * it checks that the type of a given value is Number, and the number is neither positive Infinity,
 * negative Infinity, nor NaN.
 */

console.log(Number.isFinite(1 / 0));
// expected output: false

console.log(Number.isFinite(11 / 5));
// expected output: true

console.log(Number.isFinite(0 / 0));
// expected output: false

/**
 * Number.isInteger()
 *
 * The Number.isInteger() method determines whether the passed value is an integer.
 */

console.log(Number.isInteger(10 / 5));
// expected output: true

console.log(Number.isInteger(11 / 5));
// expected output: false

console.log(Number.isInteger(5 / 10));
// expected output: false

/**
 * Number.isNaN()
 *
 * The Number.isNaN() method determines whether the passed value is NaN and its type is Number.
 * It is a more robust version of the original, global isNaN().
 */

console.log(Number.isNaN(NaN));
// expected output: true

console.log(Number.isNaN("hello"));
// expected output: false

console.log(Number.isNaN(123));
// expected output: false

/**
 * Number.parseFloat()
 *
 * The Number.parseFloat() method parses an argument and returns a floating point number.
 * If a number cannot be parsed from the argument, it returns NaN.
 */

console.log(Number.parseFloat("hello"));
// expected output: NaN

console.log(Number.parseFloat("123"));
// expected output: 123

console.log(Number.parseFloat("123.123"));
// expected output: 123.123

console.log(Number.parseFloat("1.23e+5"));
// expected output: 123000

/**
 * Number.parseInt()
 *
 * The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
 *
 * Number.parseInt(string, radix)
 *
 * radix is optional
 *
 * An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.
 *
 * If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X,
 * in which case a radix of 16 is assumed.
 */

console.log(Number.parseInt(" 0xF", 16));
// expected output: 15

console.log(Number.parseInt("321", 2));
// expected output: NaN

console.log(Number.parseInt("321.92345"));
// expected output: 321

/**
 * Number.prototype.toExponential()
 *
 * The toExponential() method returns a string representing the Number object in exponential notation.
 *
 * toExponential(fractionDigits)
 *
 * fractionDigits is optional
 *
 * An integer specifying the number of digits after the decimal point.
 * Defaults to as many digits as necessary to specify the number.
 */

const num = 77.1234;

console.log(num.toExponential()); // logs 7.71234e+1
console.log(num.toExponential(4)); // logs 7.7123e+1
console.log(num.toExponential(2)); // logs 7.71e+1
console.log((77.1234).toExponential()); // logs 7.71234e+1
console.log((77).toExponential()); // logs 7.7e+1
console.log((0).toExponential()); // logs 0e+0

/**
 * Number.prototype.toFixed()
 *
 * The toFixed() method formats a number using fixed-point notation.
 *
 * toFixed(digits)
 *
 * digits is optional
 *
 * The number of digits to appear after the decimal point; this may be a value between 0 and 20,
 * inclusive, and implementations may optionally support a larger range of values.
 * If this argument is omitted, it is treated as 0.
 */

console.log((123.456).toFixed(2));
// expected output: "123.46"

console.log((0.004).toFixed());
// expected output: "0"
