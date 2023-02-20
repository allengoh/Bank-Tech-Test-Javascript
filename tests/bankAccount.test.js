const BankAccount = require("../models/bankAccount");

describe("Bank Account", () => {

  it("constructs with a balance of 0", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.balance).toBe(0);
  });

  it("constructs with a balance of 1000", () => {
    const bankAccount = new BankAccount(1000);
    expect(bankAccount.balance).toBe(1000);
  });

  

});