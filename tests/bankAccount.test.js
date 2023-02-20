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

  it("constructs with an empty array of transactions", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.allTransactions).toEqual([]);
  });

  it("able to create a transaction and stores it in the allTransactions array", () => {
    const bankAccount = new BankAccount();
    bankAccount.createTransaction("20/02/2023", 1000, "");
    expect(bankAccount.allTransactions).toEqual([{date: "20/02/2023", credit: 1000, debit: "", balance: 1000}]);
  });

  it("throws an error if credit is not an integer", () => {
    const bankAccount = new BankAccount();
    expect(() => bankAccount.createTransaction("20/02/2023", "not an integer", "")).toThrow("Please use an integer for credit."); 
    expect(bankAccount.allTransactions).toHaveLength(0);
    expect(bankAccount.balance).toBe(0);
  });

});