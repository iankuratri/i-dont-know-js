/**
 * Question: Given a deeply nested array, create a function on the array, namely flatten, that when invoked returns
 * a flat version of the original array. Function should be defined in a way that it can be invoked on existing
 * and future arrays. 
 * 
 * 
    const input = [
        1, 2, 3,
        [4],
        [5, 6, [7], [8, [9, [10]]]],
        11, 12, 13,
        [14, [[[[[15, [16]]]]]]],
        17, 18,
        [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
    ];
    const flatArray = input.flatten();
    // flatArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
 *
 */

/** Solution 1 */
function flatten() {
  const output = [];

  function processing(inputArr) {
    for (const element of inputArr) {
      if (Array.isArray(element)) {
        processing(element);
      } else {
        output.push(element);
      }
    }
  }

  processing(this);
  return output;
}

Array.prototype.flatten = flatten;

/** Solution 2 */
function flatIt() {
  return this.toString()
    .split(",")
    .map((el) => Number(el));
}

Array.prototype.flatIt = flatIt;

/** Output */
const input = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
];

const flatArray = input.flatten();
console.log("flatArray using flatten: ", flatArray);

const flatArray2 = input.flatIt();
console.log("flatArray using flatIt: ", flatArray2);
