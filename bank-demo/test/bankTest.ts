import Bank from "../src/bank";



/**
 * Test for creating an account.
 */
function testAccountCreation(){
    const bank = new Bank(); 
    
    const account1 = bank.createAccount("Alice", 1);
    if (account1.accountNumber !== 1){
        throw new Error("Account number not set correctly");
    }
    if (account1.balance !== 0){
        throw new Error("Account balance not set correctly");
    }
    if (account1.name !== "Alice"){
        throw new Error("Account name not set correctly");
    }


    const account2 = bank.createAccount("Bob", 2);
    if (account2.accountNumber !== 2){
        throw new Error("Account number not set correctly");
    }
    if (account2.balance !== 0){
        throw new Error("Account balance not set correctly");
    }
    if (account2.name !== "Bob"){
        throw new Error("Account name not set correctly");
    }

    try{
    const account3 = bank.createAccount("Tom", 1);
    throw new Error("Account with same account number created when it should not have been");
    } catch (e){
    }

    const account4 = bank.createAccount("Alice", 5);
    if (account4.accountNumber !== 5){
        throw new Error("Account number not set correctly");
    }
    if (account4.balance !== 0){
        throw new Error("Account balance not set correctly");
    }
    if (account4.name !== "Alice"){
        throw new Error("Account name not set correctly");
    }



    console.log("Account creation test passed");

}

testAccountCreation();
