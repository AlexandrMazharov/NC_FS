import {Book} from "./Book";

export class Library {
    private _name : string;
    private _listBooks : Book[];


    constructor(name: string, listBooks: Book[]) {
        this._name = name;
        this._listBooks = listBooks;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get listBooks(): Book[] {
        return this._listBooks;
    }

    set listBooks(value: Book[]) {
        this._listBooks = value;
    }
}
