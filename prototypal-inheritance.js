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

console.log(tommy);
console.log(bruno);

console.log(tommy.bark());
console.log(bruno.walk());
