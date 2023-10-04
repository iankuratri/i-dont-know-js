/**

Object-oriented programming (OOP)

It is a is a programming paradigm that revolves around the concept of objects. 
In OOP, objects are instances of classes, which serve as blueprints for creating objects.

*/

/**

1. Classes and Objects:

In OOP, classes are used to define the structure and behavior of objects. Objects are instances of classes.

*/

// Define a class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Method to start the car
  start() {
    console.log(`${this.make} ${this.model} is starting...`);
  }
}

// Create objects from the class
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

// Call methods on objects
car1.start(); // Output: Toyota Camry is starting...
car2.start(); // Output: Honda Civic is starting...

/**

2. Inheritance:

Inheritance allows you to create a new class based on an existing class, inheriting its properties and methods.
 
*/

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inheriting from the parent class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} (a ${this.breed} dog) barks.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy (a Golden Retriever dog) barks.

/**

3. Encapsulation

Encapsulation means bundling data (attributes) and methods (functions) 
that operate on that data into a single unit (object).

*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.getArea()); // Output: 78.53981633974483

/**

4. Polymorphism:

Polymorphism allows objects of different classes to be treated as objects of a common superclass. 
This enables flexibility and extensibility in your code.

*/

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach((shape) => {
  console.log(`Area: ${shape.getArea()}`);
});
// Output:
// Area: 78.53981633974483
// Area: 16

/**

5. Abstraction

It refers to the concept of hiding complex implementation details while exposing a simplified 
and high-level interface. In essence, abstraction allows you to focus on the essential features 
of an object or class while hiding the unnecessary details. It is often used to manage complexity 
and make code more manageable and understandable.

*/
