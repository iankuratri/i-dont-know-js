/**
 * Symbol
 *
 * A “symbol” represents a unique identifier.
 */

/**
 * A value of this type can be created using Symbol()
 */

/**
 * Upon creation, we can give symbol a description (also called a symbol name),
 * mostly useful for debugging purposes:
 */

const id = Symbol("id");

console.log(id);

/**
 * Symbols are guaranteed to be unique. Even if we create many symbols with
 * the same description, they are different values. The description is just
 * a label that doesn’t affect anything.
 *
 * For instance, here are two symbols with the same description – they are not equal:
 */

const wes = Symbol("Wes");
const person = Symbol("Wes");

console.log("Are they equal?", wes == person);
// false

/**
 * “Hidden” properties
 *
 * Symbols allow us to create “hidden” properties of an object,
 * that no other part of code can accidentally access or overwrite.
 */

/**
 * Symbols are skipped by for…in
 *
 * Symbolic properties do not participate in for..in loop.
 *
 * For instance:
 */

const rollNumber = Symbol("rollNumber");

const user = {
  name: "John",
  age: 30,
  [rollNumber]: 123,
};

for (const key in user) console.log(key);
// name, age (no symbols)

// the direct access by the symbol works
console.log("Direct access by the symbol: " + user[rollNumber]);

/**
 * Simple Example To Understand Symbol:
 */
const lib = {
  name: "ABC",
};

lib["id"] = 5;
lib["id"] = 6; // The value is changed because it is String [KEY]!!

lib[Symbol("id")] = 123;
lib[Symbol("id")] = 124; //Not changed

console.log(lib); // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 }

const classRoom = {
  [Symbol("mark")]: { grade: 50, gender: "male" },
  [Symbol("olivia")]: { grade: 60, gender: "female" },
  [Symbol("olivia")]: { grade: 70, gender: "female" },
};

console.log("Students with same names in a classroom", classRoom);

/**
 * Work-around to iterate over symbols
 */

const syms = Object.getOwnPropertySymbols(classRoom);
syms.forEach((sym) => console.log(sym));

/**
 * Getting values of Symbols
 */
const students = syms.map((sym) => classRoom[sym]);
console.log(students);
