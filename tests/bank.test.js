const Bank = require("../models/bank");

//We are mocking BankAccount and Statement class here
jest.mock("../models/bankAccount");
jest.mock("../models/statement");

const BankAccount = require("../models/bankAccount");
const Statement = require("../models/statement");

const mockBankAccount = new BankAccount();
const mockStatement = new Statement();

describe("Bank Class", () => {

  it("constructs", () => {
    const bank = new Bank(mockBankAccount, mockStatement);
    expect(bank).toBeInstanceOf(Bank);
  });

  it("able to deposit money", () => {
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.deposit(100);
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 100 has been successfully deposited on 20/02/2023");
  });

});