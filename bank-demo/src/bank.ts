// Interface for a bank account
export interface BankAccount {
    name: string;
    balance: number;
    accountNumber: number;
}

/**
 * Bank class which manages all bank accounts and balance of total withdrawable cash.
 */
export class Bank {
    private accounts: Map<number, BankAccount> = new Map<number, BankAccount>(); // map of accountNumbers to bank accounts

    /**
     * Create a new bank account with the given name and account number and a balance of 0.
     * @param name name of the account holder
     * @param accountNumber unique account number
     * @returns BankAccount object representing the created account
     * @throws Error if an account with the given account number already exists.
     */
    createAccount(name: string, accountNumber: number): BankAccount { // in an actual application, it might not be safe to return the bank account object as side effects of mutation on the bank account need to be accounted for in the bank. Leaving it like this for simplicity and for adherence with the lecture code.
        const bankAccount: BankAccount = {
            name,
            accountNumber,
            balance: 0
        }
        if (this.accounts.has(accountNumber)) {
            throw new Error('Account already exists');
        }

        this.accounts.set(accountNumber, bankAccount);
        return bankAccount;
    }

    /**
     * Deposit the given amount of money into the account with the given account number. This updates the account balance and the bank's total cash balance.
     * @param accountNumber account number of the account to deposit money into
     * @param amount amount of money to deposit. Must be positive.
     * @throws Error if the account does not exist or if the amount is not positive.
     */
    deposit(accountNumber: number, amount: number): void {
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }
        const account = this.accounts.get(accountNumber);
        if (!account) {
            throw new Error('Account does not exist');
        }
        account.balance += amount;
    }


}

