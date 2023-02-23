class Statement {
  
  constructor() {
    this.header = "date || credit || debit || balance";
  };
  
  //private class to return amount in two decimal places if present
  #displayTwoDecimal(amountType) {
    if(typeof amountType === "number") {
      return amountType.toFixed(2);
    } else {
      return amountType;
    };
  };

  print(statement = []) {
    if(statement.length === 0) {
      return(`${this.header}`);
    } else {
      const mappedStatement = statement.reverse().map(transaction => `${transaction.date} || ${this.#displayTwoDecimal(transaction.credit)} || ${this.#displayTwoDecimal(transaction.debit)} || ${transaction.balance.toFixed(2)}`);
      return `${this.header}\n${mappedStatement.join('\n')}`;
    };
  };
};

module.exports = Statement;


