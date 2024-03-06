function checkTheYear(year) {
  switch (true) {
    case year % 400 === 0:
      return `The year ${year} is a leap one!`;
    case year % 4 === 0 && year % 100 !== 0:
      return `The year ${year} is a leap one!`;
    default:
      return `The year ${year} isn't a leap one!`;
  }
}

module.exports = checkTheYear;
