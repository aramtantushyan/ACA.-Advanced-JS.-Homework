class Library {
    constructor (books, readers) {
        this._books = [...books]
        this._readers = [...readers]
    }
    get books () {
        return this._books;
    }
    get readers () {
        return this._readers
    }
    doHaveBook(reqBook) {
       for (let book of this._books) {
            if (book.title === reqBook.title && book.quantity !== 0){
             return true;
            }
       }
        return false;
    }
    addBook (newBook) {
        for (let book of this._books) {
            if (book.title === newBook.title) {
                book.increaseQuantityBy(1)
            }
        }
    }
}

class Reader {

}

class Book {
    constructor (title, author) {
        this._title = title
        this._author = author
    }
    get title () {
        return this._title
    }
    get author () {
        return this._author
    }
    toString () {
        return `The ${this._title} is written by ${this._author}`
    }
    isTheSameBook (book) {
        if (this._title === book.title && this._author === book.author) {
            return true;
        }
        return false;
    }
}