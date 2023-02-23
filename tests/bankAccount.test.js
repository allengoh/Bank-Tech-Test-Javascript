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

  it("able to create a credit transaction and stores it in the allTransactions array", () => {
    const bankAccount = new BankAccount();
    bankAccount.createTransaction("20/02/2023", 1000, "");
    console.log(bankAccount.allTransactions);
    expect(bankAccount.allTransactions).toEqual([{date: "20/02/2023", credit: 1000.00, debit: "", balance: 1000.00}]);
  });

  it("able to create a debit transaction and stores it in the allTransactions array", () => {
    const bankAccount = new BankAccount(1000);
    bankAccount.createTransaction("20/02/2023", "", 200);
    expect(bankAccount.allTransactions).toEqual([{date: "20/02/2023", credit: "", debit: 200.00, balance: 800.00}]);
  });

  it("throws an error if credit is not an integer", () => {
    const bankAccount = new BankAccount();
    expect(() => bankAccount.createTransaction("20/02/2023", "not an integer", "")).toThrow("Please use an integer for credit or debit."); 
    expect(bankAccount.allTransactions).toHaveLength(0);
    expect(bankAccount.balance).toBe(0);
  });

  it("throws an error if debit is not an integer", () => {
    const bankAccount = new BankAccount(1000);
    expect(() => bankAccount.createTransaction("20/02/2023", "", "not an integer")).toThrow("Please use an integer for credit or debit."); 
    expect(bankAccount.allTransactions).toHaveLength(0);
    expect(bankAccount.balance).toBe(1000);
  });

  it("throws an error if there are insufficient funds", () => {
    const bankAccount = new BankAccount(0);
    expect(() => bankAccount.createTransaction("20/02/2023", "", 300)).toThrow("You have insufficient funds to carry out this transaction."); 
    expect(bankAccount.allTransactions).toHaveLength(0);
    expect(bankAccount.balance).toBe(0);
  });

});