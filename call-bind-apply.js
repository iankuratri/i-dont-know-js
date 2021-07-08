// person 1 details
const person1 = {
  firstName: "Ankur",
  lastName: "Atri",
};

// person 2 details
const person2 = {
  firstName: "Gaurav",
  lastName: "Sharma",
};

// function to print fullName
const fullName = function (hometown, state) {
  return `${this.firstName} ${this.lastName} from ${hometown}, ${state}`;
};

/** 
  in arrow function "this" refers to current surrounding scope (i.e., in function itself).
  while in normal function "this" refers to the parent object of function when the function is in a object.
  and if the function is not in a object then "this" refers to window object in browsers and global object in node. 
  **/

// call method in javascript

/** 
  in call function first parameter is the object which you want "this" refer to 
  and rest are standard paramters as shown below.
  **/

// consoling fullName of first person using call
console.log(
  "First Person (using call):",
  fullName.call(person1, "Bahadurgarh", "Haryana")
);

// consoling fullName of second person using call
console.log(
  "Second Person (using call):",
  fullName.call(person2, "Gurgaon", "Haryana")
);

// apply method in js

/**
  in apply function first parameter is the object which you want "this" refer to 
  and second parameter is array of multiple parameters (array list) as shown below.
  **/

// consoling fullName of first person using apply
console.log(
  "First Person (using apply):",
  fullName.apply(person1, ["Bahadurgarh", "Haryana"])
);

// consoling fullName of second person using apply
console.log(
  "Second Person (using apply):",
  fullName.apply(person2, ["Gurgaon", "Haryana"])
);

// bind method in js

/** 
  It is used to make a copy of the method and binds it with an applied object as shown below. 
  It returns a function which can be used later.
  **/

const printFirstPerson = fullName.bind(person1, "Bahadurgarh", "Haryana");

// returns a copy function with person1 binded which can be invoked later.
// console.log(printFirstPerson);

// consoling fullName of first person using bind
console.log("First Person (using bind):", printFirstPerson());

const printSecondPerson = fullName.bind(person2, "Gurgaon", "Haryana");

// returns a copy function with person2 binded which can be invoked later.
// console.log(printSecondPerson);

// consoling fullName of first person using bind
console.log("Second Person (using bind):", printSecondPerson());
