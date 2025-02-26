const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function (numbers) {
  let result = 1;

  for (let number of numbers) {
    result *= number;
  }
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (number) {
  let result = 1;
  for (let multiplier = number; multiplier > 0; --multiplier) {
    result *= multiplier;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
