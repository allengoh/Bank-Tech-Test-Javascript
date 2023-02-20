const Bank = require("../models/bank");

jest.mock("../models/bankAccount");
jest.mock("../models/statement");
const MockModel = require("../models/bankAccount");
const MockView = require("../models/statement");

describe("Bank Class", () => {

  it("constructs", () => {
    const mockModel = new MockModel();
    const mockView = new MockView();
    const bank = new Bank(mockModel, mockView);
    expect(bank).toBeInstanceOf(Bank);
  });
});