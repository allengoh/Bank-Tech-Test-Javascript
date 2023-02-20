require("../models/bankAccount");

describe("Bank Account", () => {

  it("constructs", () => {
    bankAccount = new BankAccount();
    expect(bankAccount.balance).toBe(0);
  });

});