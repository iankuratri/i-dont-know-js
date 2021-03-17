const getRandomBetween = (min = 0, max = 100, randomNumber = Math.random()) =>
  Math.floor(randomNumber * (max - min) + min);

// random number between 0 to 100
console.log(getRandomBetween());
