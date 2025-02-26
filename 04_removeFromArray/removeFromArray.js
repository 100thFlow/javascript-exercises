const removeFromArray = function (array, ...elemets) {
  for (let i = 0; i < elemets.length; ++i) {
    let index = array.indexOf(elemets[i]);
    while (index != -1) {
      array.splice(index, 1);
      index = array.indexOf(elemets[i]);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
