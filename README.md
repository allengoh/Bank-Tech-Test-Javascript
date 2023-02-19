# Bank-Tech-Test-Javascript

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

First, I create a BankAccount class that functions as the <bold>Model</bold>.

Sample code: 

```javascript
class BankAccount {

};

module.exports = BankAccount;
```

Then, I create a Statement class that functions as the <bold>View</bold>.

Sample code:

```javascript
class Statement {

  
};

module.exports = Statement;
```

Lastly, I create a Bank class that functions as the <bold>Controller</bold>.

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
  }
};
```

