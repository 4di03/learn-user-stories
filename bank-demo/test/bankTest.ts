import { Bank, BankAccount } from "../src/bank";



/**
 * Test for creating an account.
 */
function testAccountCreation() {
    const bank = new Bank();

    const account1 = bank.createAccount("Alice", 1);
    if (account1.accountNumber !== 1) {
        throw new Error("Account number not set correctly");
    }
    if (account1.balance !== 0) {
        throw new Error("Account balance not set correctly");
    }
    if (account1.name !== "Alice") {
        throw new Error("Account name not set correctly");
    }


    const account2 = bank.createAccount("Bob", 2);
    if (account2.accountNumber !== 2) {
        throw new Error("Account number not set correctly");
    }
    if (account2.balance !== 0) {
        throw new Error("Account balance not set correctly");
    }
    if (account2.name !== "Bob") {
        throw new Error("Account name not set correctly");
    }

    try {
        const account3 = bank.createAccount("Tom", 1);
        throw new Error("Account with same account number created when it should not have been");
    } catch (e) {
    }

    const account4 = bank.createAccount("Alice", 5);
    if (account4.accountNumber !== 5) {
        throw new Error("Account number not set correctly");
    }
    if (account4.balance !== 0) {
        throw new Error("Account balance not set correctly");
    }
    if (account4.name !== "Alice") {
        throw new Error("Account name not set correctly");
    }



    console.log("Account creation test passed");

}


/**
 * Test for Depositing money into accounts.
 */
function testDeposit() {

    const bank = new Bank();

    const account1: BankAccount = bank.createAccount("Alice", 1);

    const account2 = bank.createAccount("Tom", 2);


    // testing successful deposits
    bank.deposit(1, 100);

    const balance = account1.balance;
    if (balance != 100) {
        throw new Error("Deposit not successful");
    }

    bank.deposit(1, 50);

    if (account1.balance != 150) {
        throw new Error("Deposit not successful");
    }

    bank.deposit(2, 100);
    if (account2.balance !== 100) {
        throw new Error("Deposit not successful");
    }


    // testing deposit of invalid amount
    try {
        bank.deposit(1, -10);
        throw new Error("Deposit of negative amount did not throw an error");
    } catch (e) {
    }

    try {
        bank.deposit(1, 0);
        throw new Error("Deposit of 0 did not throw an error");
    } catch (e) {

    }


    // testing invalid account deposit
    try {
        bank.deposit(2, 10);
        throw new Error("Deposit to non-existent account did not throw an error");
    } catch (e) {
    }




    console.log("Deposit test passed");

}

/**
 * Test for withdrawing money from accounts.
 */
function testWithdraw() {

    const bank = new Bank();

    const account1 = bank.createAccount("Alice", 1);

    bank.deposit(1, 100);

    // testing successful withdraw
    bank.withdraw(1, 50);

    const balance = account1.balance;
    if (balance !== 50) {
        throw new Error("Withdraw not successful");
    }

    bank.withdraw(1, 50);

    if (account1.balance !== 0) {
        throw new Error("Withdraw not successful");
    }
    // testing withdraw of more than balance
    try {
        bank.withdraw(1, 100);
        throw new Error("Withdraw of more than balance did not throw an error");
    } catch (e) {
    }
    bank.deposit(1, 100);
    // testing withdraw of invalid amount
    try {
        bank.withdraw(1, -10);
        throw new Error("Withdraw of negative amount did not throw an error");
    } catch (e) {
    }

    try {
        bank.withdraw(1, 0);
        throw new Error("Withdraw of 0 did not throw an error");
    } catch (e) {

    }

    // testing withdraw from invalid account
    try {
        bank.withdraw(2, 10);
        throw new Error("Withdraw from non-existent account did not throw an error");
    } catch (e) {
    }

    console.log("Withdraw test passed");

}
/**
 * Tests for Bank.checkBalance
 */
function testCheckBalance() {
    const bank = new Bank();
    const account1 = bank.createAccount("Alice", 1);
    if (bank.checkBalance(1) !== 0) {
        throw new Error("Check balance not successful");
    }
    bank.deposit(1, 100);
    if (bank.checkBalance(1) !== 100) {
        throw new Error("Check balance not successful");
    }
    bank.deposit(1, 50);
    if (bank.checkBalance(1) !== 150) {
        throw new Error("Check balance not successful");
    }
    try {
        bank.checkBalance(2)
        throw new Error("Check balance of non-existent account did not throw an error");
    } catch (e) {
    }
    const account2 = bank.createAccount("Tom", 2);
    if (bank.checkBalance(2) !== 0) {
        throw new Error("Check balance not successful");
    }
    console.log("Check balance test passed");
}


testAccountCreation();
testDeposit();
testWithdraw();
testCheckBalance();