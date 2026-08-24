class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance";
        }

        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log(account.getBalance());