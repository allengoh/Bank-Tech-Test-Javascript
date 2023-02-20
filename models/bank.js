class Bank {
  
  constructor(model, view) {
    this.bankAccount = model;
    this.statement = view;
  };

  deposit(amount, date = new Date()) {
    let credit = amount;
    let debit = "";
    let formattedDate;
    if(typeof date === "string") {
      formattedDate = date;
    } else {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      if( month < 10) {
        month = `0${date.getMonth() + 1}`
      } else {
        month = date.getMonth() + 1;
      };
      let year = date.getFullYear();
      formattedDate = `${day}/${month}/${year}`;
    };
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully deposited on ${formattedDate}`);
  };

  withdraw(amount, date = new Date()) {
    let formattedDate;
    if(date){
      formattedDate = date.toLocaleDateString("en-GB");
    };
    let credit = "";
    let debit = amount;
    this.bankAccount.createTransaction(formattedDate, credit, debit);
    console.log(`The amount of ${amount} has been successfully withdrawn on ${formattedDate}`);
  };
};

module.exports = Bank;