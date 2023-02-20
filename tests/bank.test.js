const Bank = require("../models/bank");

//We are mocking BankAccount and Statement class here
jest.mock("../models/bankAccount");
jest.mock("../models/statement");

const BankAccount = require("../models/bankAccount");
const Statement = require("../models/statement");


const mockStatement = new Statement();

describe("Bank Class", () => {

  it("constructs", () => {
    const mockBankAccount = new BankAccount();
    const bank = new Bank(mockBankAccount, mockStatement);
    expect(bank).toBeInstanceOf(Bank);
  });

  it("able to deposit money", () => {
    const mockBankAccount = new BankAccount();
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.deposit(100);
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 100 has been successfully deposited on 20/02/2023");
  });

  it("able to deposit money with date", () => {
    const mockBankAccount = new BankAccount();
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.deposit(500, "10/02/2023");
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 500 has been successfully deposited on 10/02/2023");
  });

  it("able to withdraw money", () => {
    const mockBankAccount = new BankAccount(1000);
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.withdraw(300);
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 300 has been successfully withdrawn on 20/02/2023");
  });

  

});