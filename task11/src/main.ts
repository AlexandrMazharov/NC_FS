import {Author} from './entity/Author.js';
import {Book} from './entity/Book.js';
import {Genre} from './entity/Genre.js';
import {Library} from './entity/Library.js';
import {User} from './entity/User.js';
import {Work} from './entity/Work.js';
import {Creator} from "./Creator.js";

let c = new Creator();

let auth = c.create(Author);

let user1 = c.create(User)
console.log(c);

//
let g = new Genre('name', 'desc');

let a = new Author();
a.listbooks = [];
a.name = "alex";
a.email = "email";
a.address = "adress";
let w = new Work("title", a, g);
console.log(w);
let user = new User();
user._address = "adress";
user._email = "email";
user._name = "Nikolay";
user.libraryCardNumber = BigInt(123);
user.listBooksOnHand = [];
console.log(user);
const date1 = new Date();
let b = new Book(w, date1, BigInt(1234), user, date1);
console.log(b);
let b2 = new Book(w, date1, BigInt(12345), user, date1);
let l = new Library('name', [b, b2]);
console.log(l);


