/**
 * Prototype
 *
 * In JavaScript, every function has a property called prototype which is an object.
 *
 * By defining methods on this prototype object, you get to share methods across all
 * instances created by that function.
 *
 * This is what happens when you use the 'new' keyword to create such instances.
 *
 * Arrow functions don't have a prototype.
 */

/**
 * Object properties and methods
 */

// Single person
let person = {};

person.name = "Ankur";
person.sayMyName = function () {
  console.log(`My name is ${this.name}.`);
};
person.eat = function (food) {
  console.log(`${this.name} is eating ${food}.`);
};
person.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

// Multiple persons
function Person(name) {
  let person = {};

  person.name = name;
  person.sayMyName = function () {
    console.log(`My name is ${this.name}.`);
  };
  person.eat = function (food) {
    console.log(`${this.name} is eating ${food}.`);
  };
  person.sleep = function () {
    console.log(`${this.name} is sleeping.`);
  };
  return person;
}

const ankur = Person("Ankur");
const batman = Person("Batman");
const superman = Person("Superman");

console.log("\n", "Output of Person fn with non-shared methods:");
ankur.sayMyName(); // My name is Ankur.
batman.eat("Pizza"); // Batman is eating Pizza.
superman.sleep(); // Superman is sleeping.

/**
 * Person fn works great but we do have a problem here.
 *
 * With every new person we create,
 * we are creating new methods
 * and also allocating new memory for each of them evertime.
 *
 * What we need?
 * Create all the methods at once and share them.
 */

// Reusable methods
const personMethods = {
  sayMyName() {
    console.log(`My name is ${this.name}.`);
  },
  eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  },
  sleep() {
    console.log(`${this.name} is sleeping.`);
  },
};

function PersonOne(name) {
  let person = Object.create(personMethods);
  person.name = name;
  return person;
}

console.log("\n", "Output of PersonOne fn with shared methods:");
const ankurOne = PersonOne("Ankur");
const batmanOne = PersonOne("Batman");
const supermanOne = PersonOne("Superman");

ankurOne.sayMyName(); // My name is Ankur.
batmanOne.eat("Pizza"); // Batman is eating Pizza.
supermanOne.sleep(); // Superman is sleeping.

/**
 * Object.create()
 *
 * When we try to invoke the three methods on the person object
 * and they are not found, they get delegated to the object that
 * was passed in to Object.create(personMethods)
 *
 * When we call ankurOne.sayMyName(), JavaScript will check if
 * the person object has a menthod called sayMyName
 *
 * It doesn't, person was a actually created using Object.create with
 * personMethods as the argument
 *
 * Go to personMethods object and check if there us a sayMyName method
 *
 * It is present and gets invoked
 *
 * Because of implicit binding, this.name inside the sayMyName method
 * is going to be equal to the string Ankur
 */

/**
 * Prototype in Javascript
 *
 * In Javascript, every function has a property called prototype that references an object
 *
 * We can make use of this prototype object to define all our shareable methods
 * instead of having to create a seperate object ourselves
 */

PersonTwo.prototype.sayMyName = function () {
  console.log(`My name is ${this.name}.`);
};
PersonTwo.prototype.eat = function (food) {
  console.log(`${this.name} is eating ${food}.`);
};
PersonTwo.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

/**
 * Constructor function
 *
 * The function that is invoked using the 'new' keyword
 * is usually referred to as a constructor function.
 */

function PersonTwo(name) {
  this.name = name;
}

const ankurTwo = new PersonTwo("Ankur");
const batmanTwo = new PersonTwo("Batman");
const supermanTwo = new PersonTwo("Superman");

console.log(
  "\n",
  "Output of PersonOne fn with shared methods (using Prototype):"
);
ankurTwo.sayMyName(); // My name is Ankur.
batmanTwo.eat("Pizza"); // Batman is eating Pizza.
supermanTwo.sleep(); // Superman is sleeping.
