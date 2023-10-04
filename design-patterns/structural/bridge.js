/**

Bridge Pattern

https://www.dofactory.com/javascript/design-patterns/bridge

The Bridge pattern allows two components, a client and a service, 
to work together with each component having its own interface. 
Bridge is a high-level architectural pattern and its main goal 
is to write better code through two levels of abstraction. 
It facilitates very loose coupling of objects

The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript.

For eg: Mongoose (driver for MongoDB)

*/

// input devices

const Gestures = function (output) {
  this.output = output;

  this.tap = function () {
    this.output.click();
  };
  this.swipe = function () {
    this.output.move();
  };
  this.pan = function () {
    this.output.drag();
  };
  this.pinch = function () {
    this.output.zoom();
  };
};

const Mouse = function (output) {
  this.output = output;

  this.click = function () {
    this.output.click();
  };
  this.move = function () {
    this.output.move();
  };
  this.down = function () {
    this.output.drag();
  };
  this.wheel = function () {
    this.output.zoom();
  };
};

// output devices

const Screen = function () {
  this.click = function () {
    console.log("Screen select");
  };
  this.move = function () {
    console.log("Screen move");
  };
  this.drag = function () {
    console.log("Screen drag");
  };
  this.zoom = function () {
    console.log("Screen zoom in");
  };
};

const Audio = function () {
  this.click = function () {
    console.log("Sound oink");
  };
  this.move = function () {
    console.log("Sound waves");
  };
  this.drag = function () {
    console.log("Sound screetch");
  };
  this.zoom = function () {
    console.log("Sound volume up");
  };
};

function run() {
  let screen = new Screen();
  let audio = new Audio();

  let hand = new Gestures(screen);
  let mouse = new Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pinch();

  mouse.click();
  mouse.move();
  mouse.wheel();
}
