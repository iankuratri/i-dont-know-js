/**

Factory Pattern:

It provides an interface for creating objects but lets subclasses alter the 
type of objects that will be created. It allows you to abstract the process of 
object creation and provide flexibility in choosing which class to instantiate.

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
  this.create = function (name, type) {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
    }
  };
}

const employeeFactory = new EmployeeFactory();

const employees = [];

employees.push(employeeFactory.create("Ankur", 1));
employees.push(employeeFactory.create("Yogesh", 2));

console.log(employees);
