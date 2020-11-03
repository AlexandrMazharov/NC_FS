import {Person} from './Person';
import {Book} from "./Book";
import {Logger} from "../Logger.js";



@Logger
export class User implements Person {

    _libraryCardNumber: bigint;
    _listBooksOnHand: Book[];
    _address: string;
    _email: string;
    _name: string;

    constructor() {
    }

// constructor(libraryCardNumber: bigint, listBooksOnHand: Book[], address: string, email: string, name: string) {
    //     this._libraryCardNumber = libraryCardNumber;
    //     this._listBooksOnHand = listBooksOnHand;
    //     this._address = address;
    //     this._email = email;
    //     this._name = name;
    // }

    get libraryCardNumber(): bigint {
        return this._libraryCardNumber;
    }

    set libraryCardNumber(value: bigint) {
        this._libraryCardNumber = value;
    }

    get listBooksOnHand(): Book[] {
        return this._listBooksOnHand;
    }

    set listBooksOnHand(value: Book[]) {
        this._listBooksOnHand = value;
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
