var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Logger } from "../Logger.js";
let User = class User {
    constructor() {
    }
    // constructor(libraryCardNumber: bigint, listBooksOnHand: Book[], address: string, email: string, name: string) {
    //     this._libraryCardNumber = libraryCardNumber;
    //     this._listBooksOnHand = listBooksOnHand;
    //     this._address = address;
    //     this._email = email;
    //     this._name = name;
    // }
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
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
};
User = __decorate([
    Logger
], User);
export { User };
