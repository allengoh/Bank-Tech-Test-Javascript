class Bank {
  
  constructor(model, view) {
    this.bankAccount = model;
    this.statement = view;
  };

  deposit(amount, date = new Date()) {
    let credit = amount;
    let debit = "";
    let formattedDate;
    if (typeof date === "string") {
      formattedDate = date;
    } else {
      let { day, month, year } = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
      month = `${month}`.padStart(2, '0');
      formattedDate = `${day}/${month}/${year}`;
    };
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully deposited on ${formattedDate}`);
  };

  withdraw(amount, date = new Date()) {
    let credit = "";
    let debit = amount;
    let formattedDate;
    if (typeof date === "string") {
      formattedDate = date;
    } else {
      let { day, month, year } = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };
      month = `${month}`.padStart(2, '0');
      formattedDate = `${day}/${month}/${year}`;
    };
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully withdrawn on ${formattedDate}`);
  };
};

module.exports = Bank;