class Statement {
  
  constructor() {
    this.header = "date || credit || debit || balance";
  };

  print(statement = []) {
    if(statement.length === 0) {
      return(`${this.header}`);
    };
  };
};

module.exports = Statement;

