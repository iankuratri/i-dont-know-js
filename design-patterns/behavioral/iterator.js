/** 

Iterator Pattern

The Iterator pattern allows clients to effectively loop over a collection of objects.

*/

const Iterator = function (items) {
  this.index = 0;
  this.items = items;
};

Iterator.prototype = {
  first: function () {
    this.reset();
    return this.next();
  },
  next: function () {
    return this.items[this.index++];
  },
  hasNext: function () {
    return this.index <= this.items.length;
  },
  reset: function () {
    this.index = 0;
  },
  each: function (callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  },
};

function run() {
  let items = ["one", 2, "circle", true, "Applepie"];
  let iter = new Iterator(items);

  // using for loop

  for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
    console.log(item);
  }
  console.log("");

  // using Iterator's each method

  iter.each(function (item) {
    console.log(item);
  });
}
