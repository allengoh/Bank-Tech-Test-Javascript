class Statement {
  
  constructor() {
    this.header = "date || credit || debit || balance";
  };

  print(statement = []) {
    if(statement.length === 0) {
      return(`${this.header}`);
    } else {
      const mappedStatement = statement.map(transaction => `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`);
      return `${this.header}\n${mappedStatement.join('\n')}`;
    };
  };
};

module.exports = Statement;

