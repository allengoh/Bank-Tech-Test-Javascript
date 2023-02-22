const Bank = require("../models/bank");

//We are mocking BankAccount and Statement class here
jest.mock("../models/bankAccount");
jest.mock("../models/statement");

const BankAccount = require("../models/bankAccount");
const Statement = require("../models/statement");


const mockStatement = new Statement();

//Added this function to convert a new Date() to dd/mm/yyyy format when the test default to the current date
const formattedDate = (date) => {
  let { day, month, year } = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
  month = `${month}`.padStart(2, '0');
  return `${day}/${month}/${year}`;
};

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
    expect(consoleSpy).toHaveBeenCalledWith(`The amount of 100 has been successfully deposited on ${formattedDate(new Date())}`);
  });

  it("able to deposit money with date of transaction where it is a month with single digit", () => {
    const mockBankAccount = new BankAccount();
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.deposit(500, "10/02/2023");
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 500 has been successfully deposited on 10/02/2023");
  });

  it("able to deposit money with date of transaction where it is a month with double digit", () => {
    const mockBankAccount = new BankAccount();
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.deposit(500, "10/12/2023");
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 500 has been successfully deposited on 10/12/2023");
  });

  it("able to withdraw money with date of a transaction where it is a month with single digit", () => {
    const mockBankAccount = new BankAccount(1000);
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.withdraw(300);
    expect(consoleSpy).toHaveBeenCalledWith(`The amount of 300 has been successfully withdrawn on ${formattedDate(new Date())}`);
  });

  it("able to withdraw money with date of a transaction where it is a month with double digit", () => {
    const mockBankAccount = new BankAccount(1000);
    const bank = new Bank(mockBankAccount, mockStatement);
    const consoleSpy = jest.spyOn(console, "log");
    bank.withdraw(300, "09/11/2023");
    expect(consoleSpy).toHaveBeenCalledWith("The amount of 300 has been successfully withdrawn on 09/11/2023");
  });

  it("prints statement", () => {
    const mockBankAccount = {
      allTransactions: [
        { date: '01/01/2022', credit: 100, debit: '', balance: 100 },
        { date: '02/01/2022', credit: '', debit: 50, balance: 50 },
        { date: '03/01/2022', credit: 200, debit: '', balance: 250 },
      ],
      createTransaction: jest.fn(),
    };
    
    const mockStatement = {
      print: jest.fn(),
    };

    const bank = new Bank(mockBankAccount, mockStatement);
    bank.printStatement();
    expect(mockStatement.print).toHaveBeenCalledWith(mockBankAccount.allTransactions);
  });
});