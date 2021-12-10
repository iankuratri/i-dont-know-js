/**
 * Creational Pattern - Singleton Pattern
 *
 * The Singleton Pattern limits the number of instances of a particular object to just one.
 * This single instance is called the singleton.
 */

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function run() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log("Same instance? ", instance1 === instance2);
}

run();
