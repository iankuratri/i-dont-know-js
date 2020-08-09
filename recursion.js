/**
 * The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems.
 * A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).
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

/**
 * Problem: Flat user (any n level nested) object using recursive traversal, so that finalObj will have keys and values like,
 * user_id: 1
 * user_address_street: Kulas Light
 * user_address_geo_lat: -37.3159
 */

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
