const convertToCelsius = function (fahr) {
  let result = ((fahr - 32) * 5) / 9;
  if (result % 2 !== 0 && result !== 0) {
    result = +result.toFixed(1);
  }
  return result;
};

const convertToFahrenheit = function (cel) {
  result = (cel * 9) / 5 + 32;
  if (result % 2 !== 0 && result !== 0) {
    result = +result.toFixed(1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
