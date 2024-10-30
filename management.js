class BankAccount {
    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    moneyDeposit(amount) {
      this.balance += amount;
      console.log(`${amount} deposited. New balance: ${this.balance}`);
    }

    withdrawMoney(amount) {
        if(amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        }
    }
    
    accountInfo() {
      console.log(`Account Holder: ${this.accountHolder}, Account Number: ${this.accountNumber}, Balance:${this.balance}`);
    }

    transferMoney(amount, account1, account2) {
        if (amount > 0 && amount <= this.balance) {
            this.withdrawMoney(amount); // Withdraw from the sender's account
            receiverAccount.moneyDeposit(amount); // Deposit to the receiver's account
            console.log(`Transferred: ${amount} from ${this.accountHolder} to ${receiverAccount.accountHolder}`);
        } else {
            console.log("Invalid transfer amount");
        }
    }
}

const account1 = new BankAccount("Okoth Elijah", "123456789", 10000);
const account2 = new BankAccount("Nathan Nails", "987654321", 5000);

account1.moneyDeposit(3000);
account1.accountInfo();


account2.withdrawMoney(2000);
account2.accountInfo();