/**

Prototype Pattern

The Prototype design pattern in JavaScript is a creational pattern that involves 
creating objects based on a template or prototype object. This pattern allows you 
to create new objects by copying an existing object, known as the prototype, 
rather than creating them from scratch.

*/

const personPrototype = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

const person1 = Object.create(personPrototype);
person1.firstName = "Alice";

person1.greet();

console.log(
  "Is person1 created from personPrototype?",
  person1.__proto__ === personPrototype
);

const person2 = Object.create(personPrototype);
person2.firstName = "Bob";

person2.greet();

console.log(
  "Is person2 created from personPrototype?",
  person2.__proto__ === personPrototype
);
