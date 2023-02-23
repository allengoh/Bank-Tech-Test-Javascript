const Bank = require("../models/bank");
const BankAccount = require("../models/bankAccount");
const Statement = require("../models/statement");


describe("Integration test for bank class", () => {

  it("passes the acceptance criteria", () => {
  
    const bankAccount = new BankAccount();
    const statement = new Statement();
    const bank = new Bank(bankAccount, statement);
    const spy = jest.spyOn(console, "log");

    bank.deposit(1000, "10/01/2023");
    bank.deposit(2000, "13/01/2023");
    bank.withdraw(500, "14/01/2023");
   
    bank.printStatement();
    expect(spy).toHaveBeenCalledWith("date || credit || debit || balance\n14/01/2023 ||  || 500 || 2500\n13/01/2023 || 2000 ||  || 3000\n10/01/2023 || 1000 ||  || 1000");
  })
});

