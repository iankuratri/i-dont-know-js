/**
 * Map is a collection of keyed data items, just like an Object.
 * But the main difference is that Map allows keys of any type.
 *
 * Methods and properties are:
 *
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 */

let map = new Map();

map.set("name", "Ankur");
map.set("age", 26);
map.set({ line1: "abc buiding", line2: "xyz city" }, "address");

console.log("map has name:", map.has("name"));
console.log("age is:", map.get("age"));
console.log("map size:", map.size);

map.delete("age");

console.log("map before clear:", map);

map.clear();

console.log("map after clear:", map);

/**
 * Iteration over Map
 *
 * For looping over a map, there are 3 methods:
 *
 * map.keys() – returns an iterable for keys,
 * map.values() – returns an iterable for values,
 * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
  // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount);
  // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry);
  // cucumber,500 (and so on)
}

/**
 * Object.entries: Map from Object
 */

let obj = {
  name: "John",
  age: 30,
};

let person = new Map(Object.entries(obj));

console.log(person);

/**
 * Object.fromEntries: Object from Map
 */

let groceries = new Map([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

let prices = Object.fromEntries(groceries);

console.log(prices);
