/**
 * this keyword
 *
 * - this keyword in a function refrences the execution context for that particular call
 * - it makes functions reusable by letting you decide the context
 * - the value of 'this' keyword is determined entirely by how a function is called
 *
 * There are four ways to invoke a function in javascript, each servers
 * as a rule in determining what 'this' keyword is refrencing to
 *
 * - Implicit binding
 * - Explicit binding
 * - new binding
 * - Default binding
 */

/**
 * Order of precedence
 *
 * 1. new binding
 * 2. Explicit binding
 * 3. Implicit binding
 * 4. Default binding
 */

/**
 * Implicit binding
 *
 * When a function is invoked with the dot notation, the object to the
 * left of that dot is what the 'this' keyword is referencing to
 */

const person = {
  name: "Ankur",
  sayMyName() {
    /**
     * this keyword is referencing the 'person' object
     * this.name as person.name (Ankur)
     */
    console.log(`My name is ${this.name}.`);
  },
};

person.sayMyName();

/**
 * Explicit binding
 *
 * Every function in javascript has these built-in methods,
 * - call
 * - apply
 * - bind
 * which allows you to sepecify the context with which a function is invoked.
 *
 * The first argument passed to these functions is what 'this' references to
 */

const dog = {
  breed: "Pug",
};

function sayDogBreed() {
  console.log(`Dog breed is ${this.breed}.`);
}

/**
 * In sayDogBreed fn this keyword will referer to dog object
 * or whatever we pass in call fn as first argument
 */
sayDogBreed.call(dog);

/**
 * new binding (constructor function)
 *
 * We can invoke a function with the 'new' keyword
 * In such a scenario, the function is invoked with 'this' refrencing an empty object
 */

function Computer(brand) {
  /**
   * this = {}
   *
   * when Computer function is invoked with the 'new' keyword,
   * 'this' keyword will always reference a new empty object
   */
  this.brand = brand;
}

/**
 * When we invoke a function with the 'new' keyword, JavaScript under the hood
 * will create a new empty object that 'this' keyword will reference to
 *
 * We can add properties to that object using 'this' followed by the dot notation
 */

const myComputer = new Computer("dell");
console.log(myComputer);

/**
 * Default binding
 *
 * Fallback if none of the other three rules are matched
 *
 * If none of the three rules are satisfied, Javascript will default to
 * the global scope and set 'this' keyword to the window object
 */

/**
 * lastName will be undefined if it is not available in
 * global scope (in case of node)
 * window (in case of browser)
 */

global.lastName = "Atri";

function sayMyLastName() {
  console.log(`My last name is ${this.lastName}`);
}

sayMyLastName();
