// const  b = require("Book");
import {Person} from './Person.js';
export class User extends Person {

    _libraryCardNumber;
    _listBooksOnHand= [];


    constructor(name, email, adress, libraryCardNumber, listBooksOnHand) {
        super(name, email, adress);
        this._libraryCardNumber = libraryCardNumber;
        this._listBooksOnHand = (listBooksOnHand);
        this._name = name;
        this._email = email;
        this._adress = adress;
        this._listBooksOnHand = listBooksOnHand;

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

    get libraryCardNumber() {
        return this._libraryCardNumber;
    }

    set libraryCardNumber(value) {
        this._libraryCardNumber = value;
    }

    get listBooksOnHand() {
        return this._listBooksOnHand;
    }

    set listBooksOnHand(value) {
        this._listBooksOnHand = value;
    }
}
