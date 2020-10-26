// class Person{
//
//     _name;
//     _email;
//     _adress;
//     constructor(name, email, adress) {
//         this._name = name;
//         this._email = email;
//         this._adress = adress;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get email() {
//         return this._email;
//     }
//
//     set email(value) {
//         this._email = value;
//     }
//
//     get adress() {
//         return this._adress;
//     }
//
//     set adress(value) {
//         this._adress = value;
//     }
// }
// class Author  extends  Person{
//     _listbooks ;
//
//
//     constructor(name, email, adress) {
//         super(name, email, adress);
//         this._listbooks =null;
//     }
//     addBook(book){
//         this._listbooks.push(book);
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get email() {
//         return this._email;
//     }
//
//     set email(value) {
//         this._email = value;
//     }
//
//     get adress() {
//         return this._adress;
//     }
//
//     set adress(value) {
//         this._adress = value;
//     }
//
//     get listbooks() {
//         return this._listbooks;
//     }
//
//     set listbooks(value) {
//         this._listbooks = value;
//     }
// }
//
//
// class Book {
//     _work;
//     _yearPublication;
//     _inventoryNumber;
//     _bookHolder;
//     _dateReturn;
//
//     constructor(work, yearPublication, inventoryNumber, bookHolder, dateReturn) {
//         this._work = w.Work(work);
//         this._yearPublication = yearPublication;
//         this._inventoryNumber = inventoryNumber;
//         this._bookHolder = u.User(UserbookHolder);
//         this._dateReturn = dateReturn;
//     }
//
//     get work() {
//         return this._work;
//     }
//
//     set work(value) {
//         this._work = value;
//     }
//
//     get yearPublication() {
//         return this._yearPublication;
//     }
//
//     set yearPublication(value) {
//         this._yearPublication = value;
//     }
//
//     get inventoryNumber() {
//         return this._inventoryNumber;
//     }
//
//     set inventoryNumber(value) {
//         this._inventoryNumber = value;
//     }
//
//     get bookHolder() {
//         return this._bookHolder;
//     }
//
//     set bookHolder(value) {
//         this._bookHolder = value;
//     }
//
//     get dateReturn() {
//         return this._dateReturn;
//     }
//
//     set dateReturn(value) {
//         this._dateReturn = value;
//     }
// }
//
// class Genre{
//
//     _name
//     _description
//
//     constructor(name, description) {
//         this._name = name;
//         this._description = description;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get description() {
//         return this._description;
//     }
//
//     set description(value) {
//         this._description = value;
//     }
// }
// const g = Genre;
// class Library {
//     _name;
//     _listBooks=[b];
//
//
//     constructor(name, listBooks) {
//         this._name = name;
//         this._listBooks = b. listBooks;
//     }
// }
//
// class PrintEdition{//Печатное издание
//     _title;
//     _publisher;
//
//     constructor(title, publisher) {
//         this._title = title;
//         this._publisher = publisher;
//     }
//
//     get title() {
//         return this._title;
//     }
//
//     set title(value) {
//         this._title = value;
//     }
//
//     get publisher() {
//         return this._publisher;
//     }
//
//     set publisher(value) {
//         this._publisher = value;
//     }
// }
//
// class User extends Person {
//
//     _libraryCardNumber;
//     _listBooksOnHand= [];
//
//
//     constructor(name, email, adress, libraryCardNumber, listBooksOnHand) {
//         super(name, email, adress);
//         this._libraryCardNumber = libraryCardNumber;
//         this._listBooksOnHand = Book(listBooksOnHand);
//         this._name = name;
//         this._email = email;
//         this._adress = adress;
//         this._listBooksOnHand = listBooksOnHand;
//
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get email() {
//         return this._email;
//     }
//
//     set email(value) {
//         this._email = value;
//     }
//
//     get adress() {
//         return this._adress;
//     }
//
//     set adress(value) {
//         this._adress = value;
//     }
//
//     get libraryCardNumber() {
//         return this._libraryCardNumber;
//     }
//
//     set libraryCardNumber(value) {
//         this._libraryCardNumber = value;
//     }
//
//     get listBooksOnHand() {
//         return this._listBooksOnHand;
//     }
//
//     set listBooksOnHand(value) {
//         this._listBooksOnHand = value;
//     }
// }
// const u = User;
//
// class Work {
//
//     _title
//     _author
//     _genre
//
//     constructor(title, author, genre) {
//         this._title = title;
//         this._author = new  Author(author.name, author.email, author.adress, author.listbooks);
//         this._genre =  new Genre(genre.name, genre.description);
//     }
//
//     get title() {
//         return this._title;
//     }
//
//     set title(value) {
//         this._title = value;
//     }
//
//     get author() {
//         return this._author;
//     }
//
//     set author(value) {
//         this._author = value;
//     }
//
//     get genre() {
//         return this._genre;
//     }
//
//     set genre(value) {
//         this._genre = value;
//     }
// }
// const w = Work;
