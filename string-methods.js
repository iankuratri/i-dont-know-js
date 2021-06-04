/**
 * String.prototype.repeat()
 *
 * The repeat() method constructs and returns a new string which contains
 * the specified number of copies of the string on which it was called,
 * concatenated together.
 */

const chorus = "Because I'm happy. ";

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

/**
 * String.prototype.endsWith()
 *
 * The endsWith() method determines whether a string ends with the characters
 * of a specified string, returning true or false as appropriate.
 */

const str1 = "Cats are the best!";

console.log(str1.endsWith("best", 17));
// expected output: true

const str2 = "Is this a question";

console.log(str2.endsWith("?"));
// expected output: false

/**
 * String.prototype.startsWith()
 *
 * The startsWith() method determines whether a string begins with the
 * characters of a specified string, returning true or false as appropriate.
 */

const str3 = "Saturday night plans";

console.log(str3.startsWith("Sat"));
// expected output: true

console.log(str3.startsWith("Sat", 3));
// expected output: false

/**
 * String.prototype.replaceAll()
 *
 * The replaceAll() method returns a new string with all matches of a pattern replaced
 * by a replacement. The pattern can be a string or a RegExp, and the replacement can
 * be a string or a function to be called for each match.
 */

const p = `The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?`;

console.log(p.replaceAll("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

/**
 * String.prototype.padStart()
 *
 * The padStart() method pads the current string with another string
 * (multiple times, if needed) until the resulting string reaches the
 * given length. The padding is applied from the start of the current string.
 */

const creditCardNumber = "123412341234";
const last4Digits = creditCardNumber.slice(-4);
const maskedNumber = last4Digits.padStart(creditCardNumber.length, "*");

console.log(maskedNumber);

/**
 * String.prototype.padEnd()
 *
 * The padEnd() method pads the current string with a given string
 * (repeated, if needed) so that the resulting string reaches a
 * given length. The padding is applied from the end of the current string.
 */

const str4 = "Breaded Mushrooms";

console.log(str4.padEnd(25, "."));
// expected output: "Breaded Mushrooms........"

const str5 = "200";

console.log(str5.padEnd(5));
// expected output: "200  "
