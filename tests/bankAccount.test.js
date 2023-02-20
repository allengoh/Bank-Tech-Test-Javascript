const BankAccount = require("../models/bankAccount");

describe("Bank Account", () => {

  it("constructs", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.balance).toBe(0);
  });

});