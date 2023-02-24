# Bank-Tech-Test-Javascript

## Specification

### Requirements

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
### User stories

```
As a customer
So I can make financial transactions
I would like to open a bank account
```

```
As a customer
So I can make purchases
I would like to withdraw money from the bank 
```

```
As a customer
So I can grow my savings
I would like to deposit money into the bank
```

```
As a customer
So I can keep track of my financial transactions and account balance
I would like to be able to print out a statement
```

### Design

This application will be based on the Model-View-Controller (MVC) design pattern.

First, I create a BankAccount class that functions as the <b>Model</b>. This class would hold the data of all transactions occured.

Sample code: 

```javascript
class BankAccount {

  constructor(balance = 0) {
    this.allTransactions = [];
    this.balance = balance;
  };

};

module.exports = BankAccount;
```

Then, I create a Statement class that functions as the <b>View</b>. This class would be responsible for displaying the statement in a formatted way.

Sample code:

```javascript
class Statement {

  //this.header will be responsible for the header of the statement eg. date, credit, debit, balance
  constructor() {
    this.header = "date || credit || debit || balance";
  };

  print(transactions) {

  };



  
};

module.exports = Statement;
```

Lastly, I create a Bank class that functions as the <b>Controller</b>.

Sample code:

```javascript
import BankAccount from "./bankAccount"
import Statement from "./statement"

class Bank {
  
  //BankAccount would be the model
  //Statement would be the view
  constructor(model, view){
    this.model = model;
    this.view = view;  
  };

  deposit(amount, date = new Date()) {

  };

  withdraw(amount, date = new Date()) {

  };

  printStatement() {

  };
};
```

### Quick start

* Clone this repository
* Enter `npm install` in the terminal
* Enter `npm start` in the terminal

Example usage:
![This is an image of an example usage in node environment](/assets/images/example_usage.png)


### Tests

* Enter `npm test` in the terminal

![This is an image of Jest tests passing](/assets/images/jest_test.png)


### Dependencies

This project uses:
`jest` for testing
build in `jest --coverage`for code coverage analysis
`nodemon` to restart node with any changes in code

package.json
```javascript
"dependencies": {
    "jest": "^29.3.1",
    "nodemon": "^2.0.20"
  }
```



