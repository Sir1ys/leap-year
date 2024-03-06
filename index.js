function checkTheYear(year) {
  if (year % 400 === 0) return `The year ${year} is a leap one!`;

  if (year % 400 !== 0 && year % 100 === 0) {
    return `The year ${year} isn't a leap one!`;
  }

  if (year % 4 === 0) return `The year ${year} is a leap one!`;

  return `The year ${year} isn't a leap one!`;
}

module.exports = checkTheYear;
