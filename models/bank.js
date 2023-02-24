const BankAccount = require("./bankAccount");
const Statement = require("./statement");

class Bank {
  
  constructor(model, view) {
    this.bankAccount = model;
    this.statement = view;
  };
  
  //private function to formate new Date() to dd/mm/yyyy
  #formattedDate(date) {
    if (typeof date === "string") {
      return date;
    } else {
      let { day, month, year } = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
      month = `${month}`.padStart(2, '0');
      return `${day}/${month}/${year}`;
    };
  }

  deposit(amount, date = new Date()) {
    let credit = amount;
    let debit = "";
    let formattedDate = this.#formattedDate(date);
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully deposited on ${formattedDate}`);
  };

  withdraw(amount, date = new Date()) {
    let credit = "";
    let debit = amount;
    let formattedDate = this.#formattedDate(date);
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully withdrawn on ${formattedDate}`);
  };

  printStatement() {
    let transactions = this.bankAccount.allTransactions;
    console.log(this.statement.print(transactions));
  };
};

module.exports = Bank;


