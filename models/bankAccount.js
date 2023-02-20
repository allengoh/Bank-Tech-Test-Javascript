class BankAccount {

  constructor(balance = 0) {
    this.balance = balance;
    this.allTransactions = [];
  };

  createTransaction(date, credit, debit) {
      if(Number.isInteger(credit) && debit === "") {
        this.balance += credit;
      } else if(Number.isInteger(debit) && credit === "") {
        this.balance -= debit;
      } else {
        throw new Error("Please use an integer for credit or debit."); 
      };

    let transaction = {
      date: date,
      credit: credit,
      debit: debit,
      balance: this.balance,
    };

    this.allTransactions.push(transaction);
  };
};

module.exports = BankAccount;