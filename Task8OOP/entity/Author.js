import {Person} from './Person.js';
export class Author extends Person {

    _listbooks = [];

    constructor(name, email, address, list) {
        super(name, email, address);
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

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get listbooks() {
        return this._listbooks;
    }

    set listbooks(value) {
        this._listbooks = value;
    }
}
