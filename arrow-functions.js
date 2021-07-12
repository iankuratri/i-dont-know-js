/**
 * Arrow Functions
 *
 * Introduced in ES6
 * Concise function syntax
 * Apart from their concise syntax, they play a part in determining 'this' keyword
 * Lexical Binding
 */

/**
 * Rules of determining 'this' reference
 *
 * 1. Implicit binding
 * 2. Explicit binding
 * 3. 'new' binding
 * 4. Default binding
 * 5. Lexical binding
 */

// Determine 'this'
const person = {
  firstName: "Vishwas",
  lastName: "Batman",
  sayMyName() {
    const fullName = function () {
      return `${this.firstName} ${this.lastName}`;
    };

    console.log(`Full name is ${fullName()}`);
  },
};

// Output: Full name is undefined undefined
person.sayMyName();

/**
 * Problem is that implicit binding is on the sayMyName function
 *
 * Within sayMyName, 'this' points to the person object
 *
 * On line 24, fullName() has no implicit, explicit or new binding
 *
 * Defaults to global binding
 *
 * Within the fullName function, this points to window object
 *
 * In the global scope, we don't have any variables called firstName or lastName
 *
 * To make our original code work we have to convert fullName fn to arrow fn
 */

// Lexical Binding
const person2 = {
  firstName: "Ankur",
  lastName: "Atri",
  sayMyName() {
    const fullName = () => {
      return `${this.firstName} ${this.lastName}`;
    };

    console.log(`Full name is ${fullName()}`);
  },
};

// Output: Full name is Ankur Atri
person2.sayMyName();

/**
 * Unlike normal functions, an arrow function does not define a 'this' keyword at all
 *
 * 'this' keyword in an arrow function behaves like any other variable
 *
 * It is going to lexically resolve to an enclosing scope that does define this keyword
 *
 * That is about Lexical Binding to determine 'this' keyword in Javascript
 */
