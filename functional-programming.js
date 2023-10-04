/**

Functional programming

It is a programming paradigm where programs are constructed by applying and composing functions.

In JavaScript, you can apply functional programming concepts to write code 
that is more concise, predictable, and easier to reason about.

*/

/**

1. First-Class and Higher-Order Functions:

First-class functions: 
In JavaScript, functions are first-class citizens, which means they can be assigned to variables, 
passed as arguments to other functions, and returned as values from other functions.

Higher-order functions: 
A higher-order function is a function that takes one or more functions as arguments or 
returns a function as its result. Examples include map, filter, and reduce.

*/

/**

2. Pure Functions:

A pure function is a function that always returns the same output for the same input 
and has no side effects. Side effects include modifying external state or variables, 
performing I/O operations, and more.

*/

/**

3. Immutability:

Immutability means that data cannot be modified once it is created. 
In JavaScript, you can use techniques like Object spread, Array methods (e.g., map, filter, concat), 
and libraries like Immutable.js to work with immutable data structures.

*/

/**

4. Function Composition:

Function composition is the act of combining multiple functions to produce a new function. 
This allows you to break complex tasks into smaller, reusable functions.

*/

const compose = (f, g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const double = (x) => x * 2;

const addOneAndDouble = compose(double, addOne);

/**

5. Declarative vs. Imperative:

Declarative programming focuses on what you want to achieve, while imperative programming focuses 
on how to achieve it. Functional JavaScript tends to be more declarative, 
which can make your code more self-explanatory.

*/

// Imperative
const numbersI = [1, 2, 3, 4, 5];
const squaredI = [];
for (let i = 0; i < numbersI.length; i++) {
  squaredI.push(numbersI[i] ** 2);
}

// Declarative
const numbersD = [1, 2, 3, 4, 5];
const squaredD = numbersD.map((num) => num ** 2);

/**

6. Closures:

Closures occur when a function "closes over" its lexical scope, preserving access to 
variables even after the outer function has finished executing. 

Closures are a powerful concept in functional programming.

*/

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1

/**

7. Recursion:

Recursion is a technique where a function calls itself to solve a problem. 
It's often used in functional programming to replace iterative loops.

*/

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
