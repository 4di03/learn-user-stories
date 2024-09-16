import {Bank, BankAccount} from "../src/bank";



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

    const account1 : BankAccount = bank.createAccount("Alice", 1);

    const account2 = bank.createAccount("Tom", 2);


    // testing successful deposits
    bank.deposit(1, 100);

    const balance = account1.balance;
    if (balance!= 100) {
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


testAccountCreation();
testDeposit();