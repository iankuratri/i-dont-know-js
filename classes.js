/**
 * Classes
 *
 * Classes are a template for creating objects.
 * They encapsulate data with code to work on that data.
 */

class Student {
  constructor(name) {
    this.name = name;
  }

  study() {
    console.log(`${this.name} studies`);
  }

  /**
   * static
   *
   * The static keyword defines a static method or property for a class.
   * Neither static methods nor static properties can be called on instances
   * of the class. Instead, they're called on the class itself.
   */

  static learn() {
    console.log("He learns programming daily");
  }
}

// instance of Student class
const ankur = new Student("Ankur");
ankur.study();

// static methods and properties are called on the class itself
Student.learn();

// teacher class inheriting properties of students class
class Teacher extends Student {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} teaches ${this.subject}`);
  }
}

// instance of Teacher class
const mosh = new Teacher("Mosh", "Programming");
mosh.teach();

/**
 * Calculator chain using classes
 */

class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(number) {
    this.value += number;
    return this;
  }

  sub(number) {
    this.value -= number;
    return this;
  }

  print() {
    console.log(this.value);
  }
}

class ScientificCalculator extends Calculator {
  constructor(initialValue = 0) {
    super(initialValue);
  }

  square() {
    this.value *= this.value;
    return this;
  }
}

const s = new ScientificCalculator();

s.add(10).sub(5).square().print();
