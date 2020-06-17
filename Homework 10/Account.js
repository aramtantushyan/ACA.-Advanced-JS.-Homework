class Account {
    constructor (id, name, balance) {
        this._name = name
        this._balance = balance
        this._id = id
    }
    get name () {
        return this._name;
    }
    get balance () {
        return this._balance;
    }
    get id () {
        return this._id;
    }
    set name (value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error ('Invalid value for name');
        }
        this._name = value;
    }
    set balance (value) {
        if (typeof value !== 'number') {
            throw new Error ('Invalid value for balance')
        }
        this._balance = value;
    }
    credit (amount) {
        let newBalance = this._balance + amount;
        this._balance = newBalance;
        return newBalance;
    }
    debit (amount) {
        if(amount > this._balance) {
            return 'Amount exceeded'
        }
        let newBalance = this._balance - amount;
        this._balance = newBalance;
        return newBalance;
    }
    transferTo (anotherAccount, amount) {
        if(amount > this._balance) {
            return 'Amount exceeded'
        }
        anotherAccount.balance += amount;
        this._balance -= amount;
        return this._balance;
    }
    static identifyAccouts (accountFirst, accountSecond) {
        let firstKeys = Object.keys(accountFirst);
        let secondKeys = Object.keys(accountSecond);
        for (let i = 0; i < firstKeys.length; i++) {
            if (firstKeys[i] !== secondKeys[i]) {
                return false;
            }
            return true;
        }           
    }
    toString() {
        return `The account: ${this._name} with id: ${this._id} has balance of ${this._balance}`
    }   
}