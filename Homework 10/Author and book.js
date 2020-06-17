class Author {
    constructor (name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender
    }

    get name () {
        return `${this._name}`;
    }
    get email () {
        return `${this._email}`;
    }
    get gender () {
        return `${this._gender}`;
    }

    toString() {
        return `${this._name} is an author`;
    }
}

class Book {
    constructor (title, author, price, quantity) {
        this._title = title
        this._author = author
        this._price = price
        this._quantity = quantity
    }
    getProfit () {
        return this._quantity * this._price
    }
    toString () {
        return `This book is written by ${this._author.name}`
    }
    get title () {
        return `${this._title}`;
    }
    get author () {
        return `${this._author}`;
    }
    get price () {
        return `$ ${this._price}`;
    }
    get quantity () {
        return this._quantity;
    }
    set title (value) {
        this._title = value;
    }
    set author (value) {
        this._name = value.name
        this._email = value.email
        this._gender = value.gender
    }
    set price (value) {
        if (typeof value !== 'number') {
            throw new Error ('Price value is invalid');
        }
        this._price = value;
    }
    set quantity (value) {
        if (typeof value !== 'number') {
            throw new Error ('Quantity value is invalid');
        }
        this._quantity = value;
    }
}
