const Statement = require("../models/statement");

describe("Statement Class", () => {

  it("constructs with a header of a printed bank statement", () => {
    const statement = new Statement();
    expect(statement.header).toBe("date || credit || debit || balance");
  });
  
  it("returns an empty statement without transactions", () => {
    const statement = new Statement();
    expect(statement.print()).toBe("date || credit || debit || balance");
  });

  it("returns an array with the header with an array of single transaction", () => {
    const statement = new Statement();
    const allTransactions = [{date: "20/02/2023", credit: 1000, debit: "", balance: 1000}]; 
    expect(statement.print(allTransactions)).toBe("date || credit || debit || balance\n20/02/2023 || 1000 ||  || 1000");
  });

  it("returns an array with the header with transactions", () => {
    const statement = new Statement();
    const allTransactions = [{date: "20/02/2023", credit: 1000, debit: "", balance: 1000}, {date: "21/02/2023", credit: "", debit: 300, balance: 700}]; 
    expect(statement.print(allTransactions)).toBe("date || credit || debit || balance\n21/02/2023 ||  || 300 || 700\n20/02/2023 || 1000 ||  || 1000");
  });

});