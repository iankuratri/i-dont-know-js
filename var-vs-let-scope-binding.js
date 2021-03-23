/**
 * var - function scope
 *
 * With var you have a function scope, and only one shared binding for all of your
 * loop iterations - i.e. the i in every setTimeout callback means the same variable
 * that finally is equal to 6 after the loop iteration ends.
 */

(function timer() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
})();

/**
 * let - block scope
 *
 * With let you have a block scope and when used in the for loop you get a new binding
 * for each iteration - i.e. the i in every setTimeout callback means a different variable,
 * each of which has a different value: the first one is 0, the next one is 1 etc.
 */

(function timer() {
  for (let j = 0; j <= 5; j++) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  }
})();
