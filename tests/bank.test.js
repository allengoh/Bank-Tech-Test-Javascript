const Bank = require("../models/bank");

jest.mock("../models/bankAccount");
jest.mock("../models/statement");
const MockBankAccount = require("../models/bankAccount");
const MockStatement = require("../models/statement");

describe("Bank Class", () => {

  it("constructs", () => {
    const mockBankAccount = new MockBankAccount();
    const mockStatement = new MockStatement();
    const bank = new Bank(mockBankAccount, mockStatement);
    expect(bank).toBeInstanceOf(Bank);
  });
});