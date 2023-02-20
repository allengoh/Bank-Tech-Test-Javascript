class Statement {
  
  constructor() {
    this.header = "date || credit || debit || balance";
  };

  print(statement = "") {
    return(`${this.header}\n` + `${statement}`);
  }  
};

module.exports = Statement;