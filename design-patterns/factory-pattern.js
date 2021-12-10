/**
 * Design Patterns - Factory Pattern
 *
 * The factory pattern wraps a constructor for different types of objects
 * and returns instances of the objects via a simple API.
 *
 * It makes it easy to create different objects by exposing a simple API that
 * return the specified object type.
 *
 * A Factory Method creates new objects as instructed by the client.
 *
 * One way to create objects in JavaScript is by invoking a constructor function with the new operator.
 */

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  return `Hi, I am ${this.name} and I am a ${this.type}.`;
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Ankur", 1));
employees.push(employeeFactory.create("Tom", 2));

employees.forEach((emp) => {
  console.log(say.call(emp));
});
