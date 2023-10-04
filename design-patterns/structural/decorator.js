/**

Decorator Pattern

It allows you to add behavior or responsibilities to objects dynamically, 
without altering their code. It is a structural pattern that involves creating 
a set of decorator classes that are used to wrap concrete components

*/

// Let's say we have a simple Coffee class representing a basic coffee:

class Coffee {
  cost() {
    return 5; // Base cost of a basic coffee
  }
}

// Now, we want to add decorators for additional ingredients, such as milk and sugar,
// which will modify the cost of the coffee. Each decorator will extend the Coffee class
// and override the cost method to include its own cost.

// Decorator for adding milk
class MilkDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2; // Add the cost of milk
  }
}

// Decorator for adding sugar

class SugarDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1; // Add the cost of sugar
  }
}

// Now, you can use these decorators to customize your coffee:

const basicCoffee = new Coffee();
console.log(`Basic Coffee Cost: $${basicCoffee.cost()}`);

const coffeeWithMilk = new MilkDecorator(basicCoffee);
console.log(`Coffee with Milk Cost: $${coffeeWithMilk.cost()}`);

const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(
  `Coffee with Milk and Sugar Cost: $${coffeeWithMilkAndSugar.cost()}`
);
