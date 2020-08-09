/*
 The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.
 A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).
 */

/*
 Problem 1: Flat user (any n level nested) object using recursive traversal, 
 so that finalObj will have keys and values like,
 {
  user_id: 1,
  user_name: 'Leanne Graham',
  user_email: 'Sincere@april.biz',
  user_address_geo_lat: '-37.3159',
  user_address_geo_lng: '81.1496',
 }
 */

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const flattenObj = (obj, parent, finalObj) => {
  for (let key in obj) {
    const newParent = `${parent}_${key}`;
    const value = obj[key];

    if (typeof value === "object") {
      flattenObj(value, newParent, finalObj);
    } else {
      finalObj[newParent] = value;
    }
  }
};

const finalObj = {};

flattenObj(user, "user", finalObj);
console.log(finalObj);

/*
 Problem 2: Write a function to get the sum of all salaries

 A company has departments.
 A department may have an array of staff. For instance, sales department has 2 employees: John and Alice.

 Or a department may split into subdepartments, like development has two branches: sites and internals.
 Each of them has their own staff.

 It is also possible that when a subdepartment grows, it divides into subsubdepartments (or teams).
 */

const company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

const sumSalaries = (department) => {
  if (Array.isArray(department)) {
    return department.reduce((total, current) => total + current.salary, 0);
  } else {
    let sum = 0;

    for (let subDep of Object.values(department)) {
      sum += sumSalaries(subDep);
    }
    return sum;
  }
};

console.log(sumSalaries(company));
