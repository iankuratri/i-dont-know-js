/**
  * Question: Create a function calculator that should take one initial value.
  * Chain calculations like add, subtract on it.
  * Return the calculated value on invocation of val function at the end of the chain.
  * 
    const result = cal(2)
            .add(5)
            .sub(4)
            .val()

    console.log("Result is : " , result)
    Output : 3 (2 + 5 - 4)
  */

/** Solution 1: Using function */
function calculator(initialValue) {
  let total = initialValue;

  return {
    add(number) {
      total += number;
      return this;
    },
    subtract(number) {
      total -= number;
      return this;
    },
    value() {
      return total;
    },
  };
}

const result = calculator(10).add(5).subtract(3).value();
console.log("Result using function: ", result);

/** Solution 2: Using class */
class Calculator {
  constructor(initialValue) {
    this.total = initialValue;
  }

  add(number) {
    this.total += number;
    return this;
  }

  subtract(number) {
    this.total -= number;
    return this;
  }

  value() {
    return this.total;
  }
}

function cal(initialValue) {
  return new Calculator(initialValue);
}

const result2 = cal(15).add(5).subtract(3).value();
console.log("Result using class: ", result2);
