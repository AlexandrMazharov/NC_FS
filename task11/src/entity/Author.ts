import {Person} from './Person';
import {Book} from './Book';
import {Logger} from '../Logger.js';


@Logger
export class Author implements Person {

    _listbooks: Book[];
    _address: string;
    _email: string;
    _name: string;


    constructor() {
    }

// constructor(listbooks: Book[], address: string, email: string, name: string) {
    //     this._listbooks = listbooks;
    //     this._address = address;
    //     this._email = email;
    //     this._name = name;
    // }

    get listbooks(): Book[] {
        return this._listbooks;
    }

    set listbooks(value: Book[]) {
        this._listbooks = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}



