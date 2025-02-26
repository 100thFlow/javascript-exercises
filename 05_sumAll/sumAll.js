const sumAll = function (from, to) {
  if (
    [from, to].some(
      (value) =>
        typeof value !== 'number' || !Number.isInteger(value) || value < 0,
    )
  ) {
    return 'ERROR';
  }
  let result = 0;
  let minNumber = Math.min(from, to);
  let maxNumber = Math.max(from, to);
  for (; minNumber <= maxNumber; ++minNumber) {
    result += minNumber;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
