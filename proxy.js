/**
 * Proxy
 *
 * The Proxy object enables you to create a proxy for another object,
 * which can intercept and redefine fundamental operations for that object.
 *
 * or
 *
 * Proxy allows you to overwrite the default beahvior
 * of any operaiton on an another object.
 */

const person = { name: "ankur", age: 26 };

/**
 * A Proxy is created with two parameters:
 *
 * target: the original object which you want to proxy
 *
 * handler: an object that defines which operations will
 * be intercepted and how to redefine intercepted operations.
 *
 * e.g. get trap for reading a property of target,
 * set trap for writing a property into target, and so on.
 */

const handler = {
  get(target, prop) {
    if (prop === "name") {
      return target[prop].toUpperCase();
    }

    // With the help of the Reflect class we can give some
    // accessors the original behavior and redefine others:
    return Reflect.get(...arguments);
  },

  set(target, prop, receiver) {
    if (prop === "age") {
      if (typeof receiver !== "number") {
        throw new Error(`${prop} can only be a number.`);
      } else {
        target[prop] = receiver;
      }
    }

    // With the help of the Reflect class we can give some
    // accessors the original behavior and redefine others:
    return Reflect.set(...arguments);
  },
};

const personProxy = new Proxy(person, handler);

console.log("PersonProxy: ", personProxy);

// getting name
console.log("PersonProxy Uppercase Name: ", personProxy.name);

// setting age
personProxy.age = 27;

console.log("PersonProxy Updated Age: ", personProxy.age);
