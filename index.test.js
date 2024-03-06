const checkTheYear = require("./index");

describe("checkTheYear", () => {
  it("return correct statement if the year is not divisible by 4", () => {
    expect(checkTheYear(1999)).toBe("The year 1999 int't a leap one!");
  });
});
