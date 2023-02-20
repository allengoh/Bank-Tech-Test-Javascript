class BankAccount {

  constructor(balance = 0) {
    this.balance = balance;
    this.allTransactions = [];
  };

  createTransaction(date, credit, debit) {
    if(debit === "") {
      this.balance += credit;
    };
    let transaction = {
      date: date,
      credit: credit,
      debit: debit,
      balance: this.balance,
    };

    this.allTransactions.push(transaction);
  }
};

module.exports = BankAccount;