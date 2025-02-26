const palindromes = function (string) {
  formattedString = string.replace(/[!"#$%&'()*+ ,-./:;<=>?@[\]^_`{|}~]/g, '');
  if (
    formattedString.split('').reverse().join('').toLowerCase() ===
    formattedString.toLowerCase()
  ) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
