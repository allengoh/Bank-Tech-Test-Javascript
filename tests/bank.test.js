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

  });

});