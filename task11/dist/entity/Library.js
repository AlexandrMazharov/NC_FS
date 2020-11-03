export class Library {
    constructor(name, listBooks) {
        this._name = name;
        this._listBooks = listBooks;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get listBooks() {
        return this._listBooks;
    }
    set listBooks(value) {
        this._listBooks = value;
    }
}
