const checkTheYear = require("./index");

describe("checkTheYear", () => {
  it("return correct statement if the year is not divisible by 4", () => {
    expect(checkTheYear(1999)).toBe("The year 1999 isn't a leap one!");
    expect(checkTheYear(1997)).toBe("The year 1997 isn't a leap one!");
  });

  it("return correct statement if the year is divisible by 4", () => {
    expect(checkTheYear(2000)).toBe("The year 2000 is a leap one!");
    expect(checkTheYear(2004)).toBe("The year 2004 is a leap one!");
  });

  it("return correct statement if the year is divisible by 400", () => {
    expect(checkTheYear(1600)).toBe("The year 1600 is a leap one!");
    expect(checkTheYear(1200)).toBe("The year 1200 is a leap one!");
  });

  it("return correct statement if the year is not divisible by 400 but divisble by 100", () => {
    expect(checkTheYear(1800)).toBe("The year 1800 isn't a leap one!");
    expect(checkTheYear(1400)).toBe("The year 1400 isn't a leap one!");
  });
});
