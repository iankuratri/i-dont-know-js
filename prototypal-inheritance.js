/** Source: https://javascript.info/prototype-inheritance */

/**
 * Prototypal inheritance
 *
 * In programming, we often want to take something and extend it.
 *
 * For instance, we have a user object with its properties and methods,
 * and want to make admin and guest as slightly modified variants of it.
 * We’d like to reuse what we have in user, not copy/reimplement its methods,
 * just build a new object on top of it.
 *
 * Prototypal inheritance is a language feature that helps in that.
 */

/**
 * [[Prototype]]
 *
 * In JavaScript, objects have a special hidden property [[Prototype]]
 * (as named in the specification), that is either null or references
 * another object. That object is called “a prototype”:
 */

/**
 * When we read a property from object, and it’s missing, JavaScript automatically
 * takes it from the prototype. In programming, such thing is called “prototypal inheritance”.
 * And soon we’ll study many examples of such inheritance, as well as cooler
 * language features built upon it.
 *
 * The property [[Prototype]] is internal and hidden, but there are many ways to set it.
 *
 * One of them is to use the special name __proto__, like this:
 */

/** Example 1 */

const animal = {
  eats: true,
};
const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

/**
 * Now if we read a property from rabbit, and it’s missing,
 * JavaScript will automatically take it from animal.
 *
 * For instance:
 */

console.log("\n", "Output of Example 1:");

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

/** Example 2 */

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} barked!`;
};

Dog.prototype.walk = function () {
  return `${this.name} walked!`;
};

const tommy = new Dog("Tommy", "Golden Retriever");
const bruno = new Dog("Bruno", "German Shepherd");

console.log("\n", "Output of Example 2:");

console.log(tommy);
console.log(bruno);

console.log(tommy.bark());
console.log(bruno.walk());

/** Example 3 */

// Person
function Person(name) {
  this.name = name;
}

Person.prototype.sayMyName = function () {
  console.log(`My name is ${this.name}.`);
};

Person.prototype.eat = function (food) {
  console.log(`${this.name} is eating ${food}.`);
};

Person.prototype.sleep = function () {
  console.log(`${this.name} is sleeping.`);
};

const ankur = new Person("Ankur");

console.log("\n", "Output of Example 3:");

ankur.sayMyName();
ankur.eat("Pizza");
ankur.sleep();

// Programmer fn inheriting Person fn
function Programmer(name, language) {
  Person.call(this, name);
  this.language = language;
}

Programmer.prototype = Object.create(Person.prototype);

Programmer.prototype.code = function () {
  console.log(`${this.name} codes in ${this.language}.`);
};

Programmer.prototype.constructor = Programmer;

const vishwas = new Programmer("Vishwas", "JavaScript");

vishwas.sayMyName();
vishwas.code();

console.log(vishwas.constructor);
console.log(vishwas instanceof Person);
console.log(vishwas instanceof Programmer);

/**
 * Prototype chain
 *
 * Each object has a private property which holds a link to another object
 * called its prototype. That prototype object has a prototype of its own,
 * and so on until an object is reached with null as its prototype.
 *
 * By definition, null has no prototype, and acts as the final link in this prototype chain.
 */
