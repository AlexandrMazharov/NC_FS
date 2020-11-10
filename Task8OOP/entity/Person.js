 export class Person{
    _name;
    _email;
    _address;
    getPerson  = function (){
        return`${this.name} ${this.email} ${this.address}`;
     }
    constructor(name, email, address) {
        this._name = name;
        this._email = email;
        this._address = address;
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
}
