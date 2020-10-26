import {Person} from './Person.js';
import {Book} from './Book.js';
export class Author extends Person {

    _listbooks = [];

    constructor(name, email, adress, list) {
        super(name, email, adress);
        this._listbooks =list;


    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get adress() {
        return this._adress;
    }

    set adress(value) {
        this._adress = value;
    }

    get listbooks() {
        return this._listbooks;
    }

    set listbooks(value) {
        this._listbooks = value;
    }
}
