/**

Chain of Responsibility Pattern

The Chain of Responsibility pattern provides a chain of loosely coupled objects 
one of which can satisfy a request. This pattern is essentially a linear search 
for an object that can handle a particular request.

An example of a chain-of-responsibility is event-bubbling in which an event propagates 
through a series of nested controls one of which may choose to handle the event.

*/

const Request = function (amount) {
  this.amount = amount;
  console.log("Requested: $" + amount + "\n");
};

Request.prototype = {
  get: function (bill) {
    let count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  },
};
function run() {
  const request = new Request(378);

  request.get(100).get(50).get(20).get(10).get(5).get(1);
}
