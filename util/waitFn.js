const wait = (delay = 0) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const makePizza = async () => {
  console.log("I am making a Pizza. It will take 10 seconds.");
  await wait(10 * 1000);
  console.log("Pizza is ready.");
};

makePizza();
