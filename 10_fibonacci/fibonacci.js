const fibonacci = function (n) {
  n = +n;
  if (n === 0) return 0;
  else if (n < 2 && n > 0) return 1;
  else if (n < 0) return 'OOPS';

  let fibonacciSequence = [1, 1];
  let fibonacciNext;
  for (i = 3; i <= n; ++i) {
    fibonacciNext = fibonacciSequence.at(-1) + fibonacciSequence.at(-2);
    fibonacciSequence.push(fibonacciNext);
  }
  return fibonacciSequence.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
