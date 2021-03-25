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

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replaceAll("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
