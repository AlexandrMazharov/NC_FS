import {Author} from './entity/Author.js';
import {Book} from './entity/Book.js';
import {Genre} from './entity/Genre.js';
import {Library} from './entity/Library.js';
import {Person} from './entity/Person.js';
import {User} from './entity/User.js';
import {Work} from './entity/Work.js';

let p = new Person('n', 'email', 'adr');
console.log(p.getPerson);

let g = new Genre('name', 'desc');
let a = new Author('Alex', 'email', 'adres',);
let w = new Work("title", a, g);
console.log(w);
let user = new User('name', "email", "adress", 123, []);
console.log(user);
let b = new Book(w, "yearPublication", "inventoryNumber", user, "dateReturn");
console.log(b);
let b2 = new Book(w, "yearPublication", "inventoryNumber", user, "dateReturn");
let l = new Library('name',[b,b2]);
console.log(l);







