const Statement = require("../models/statement");

describe("Statement Class", () => {

  it("constructs with a header of a printed bank statement", () => {
    const statement = new Statement();
    expect(statement.header).toBe("date || credit || debit || balance");

  });
});