function createBankAccount(initial) {
    let balance = initial;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());