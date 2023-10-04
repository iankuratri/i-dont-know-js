/**

Singleton Pattern

The Singleton Pattern limits the number of instances of a particular object to just one.
This single instance is called the singleton.

*/

const logger = (function () {
  let instance = null;

  function createInstance() {
    const loggerInsance = new Object("I am logger instance");
    return loggerInsance;
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

const logger1 = logger.getInstance();
const logger2 = logger.getInstance();

console.log("Are both instances same?", logger1 === logger2);
