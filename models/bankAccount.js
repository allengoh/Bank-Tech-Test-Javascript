class BankAccount {

  constructor(balance = 0) {
    this.balance = balance;
    this.allTransactions = [];
  };
};

module.exports = BankAccount;