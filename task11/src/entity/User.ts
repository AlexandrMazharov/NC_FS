import {Person} from './Person';
import {Book} from "./Book";

export class User implements Person {

    _libraryCardNumber: number;
    _listBooksOnHand: Book[];
    _address: string;
    _email: string;
    _name: string;

    constructor() {
    }

    get libraryCardNumber(): number {
        return this._libraryCardNumber;
    }

    set libraryCardNumber(value: number) {
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
