/**

Constructor Pattern

The construct pattern is simplest, modern, and one of the most popular sub-categories of 
creational design patterns in JavaScript. The main purpose of this pattern is to felicitate 
the constructor creation.

*/

class Automobile {
  constructor(brand, model, mileage) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;

    this.getDetails = function () {
      console.log(`${this.brand} ${this.model} gives ${this.mileage} kmpl!`);
    };
  }
}

const myCar = new Automobile("Hyundai", "i10", "17");
myCar.getDetails();
