/**
 * create a function to achieve this functionality
 * data(10).add(5).subtract(3).value() = 12
 *  
 * */ 

function data(init) {
  let total = init;

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

console.log(data(10).add(5).subtract(3).value());
