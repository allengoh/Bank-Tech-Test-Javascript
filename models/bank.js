class Bank {
  
  constructor(model, view) {
    this.bankAccount = model;
    this.statement = view;
  };

  deposit(amount, date = new Date()) {
    let formattedDate = date.toLocaleDateString("en-GB");
    let credit = amount;
    let debit = "";
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully deposited on ${formattedDate}`);
  }
};

module.exports = Bank;