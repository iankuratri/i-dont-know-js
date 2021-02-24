/**
 * A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
 *
 * Its main methods are:
 *
 * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 * set.size – is the elements count.
 *
 * The main feature is that repeated calls of set.add(value) with the same value don’t do anything.
 * That’s the reason why each value appears in a Set only once.
 */

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size); // 3

console.log(set);

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

/**
 * Iteration over Set
 *
 * We can loop over a set either with for..of or using forEach:
 */

let fruits = new Set(["oranges", "apples", "bananas"]);

for (let value of fruits) console.log(value);

// the same with forEach:
fruits.forEach((value, valueAgain, set) => {
  console.log(value);
});

/**
 * Filter unique array members using set
 */

let names = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

let uniqueNames = [...new Set(names)];

console.log(uniqueNames);
