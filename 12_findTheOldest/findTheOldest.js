const findTheOldest = function (array) {
  if (array.length === 0) return 'ERROR';
  return array.reduce((oldestPerson, person) => {
    const currentDate = new Date();
    const getAge = (person) =>
      (person.yearOfDeath ?? currentDate.getFullYear()) - person.yearOfBirth;
    return getAge(person) > getAge(oldestPerson) ? person : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
