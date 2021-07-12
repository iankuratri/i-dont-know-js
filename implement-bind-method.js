Function.prototype.bindFn = function (context) {
  let fn = this;
  return function () {
    fn.apply(context, [...arguments]);
  };
};

const person = {
  name: "Ankur",
};

function introduceMe(occupation) {
  console.log(`My name is ${this.name} and I am a ${occupation}.`);
}

const boundFn = introduceMe.bindFn(person);
boundFn("Frontend Developer");
