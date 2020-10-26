 export class Person{

    _name;
    _email;
    _adress;
    getPerson  = new function (){
        return`${this.name} ${this.email} ${this.adres}`;
     }
    constructor(name, email, adress) {
        this._name = name;
        this._email = email;
        this._adress = adress;
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
}
