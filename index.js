function checkTheYear(year) {
  if (year % 4 !== 0) return `The year ${year} isn't a leap one!`;

  return `The year ${year} is a leap one!`;
}

module.exports = checkTheYear;
