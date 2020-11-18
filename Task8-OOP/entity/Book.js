export class Book {
  _work;
  _yearPublication;
  _inventoryNumber;
  _bookHolder;
  _dateReturn;

  constructor(work, yearPublication, inventoryNumber, bookHolder, dateReturn) {
    this._work = work;
    this._yearPublication = yearPublication;
    this._inventoryNumber = inventoryNumber;
    this._bookHolder = bookHolder;
    this._dateReturn = dateReturn;
  }

  get work() {
    return this._work;
  }

  set work(value) {
    this._work = value;
  }

  get yearPublication() {
    return this._yearPublication;
  }

  set yearPublication(value) {
    this._yearPublication = value;
  }

  get inventoryNumber() {
    return this._inventoryNumber;
  }

  set inventoryNumber(value) {
    this._inventoryNumber = value;
  }

  get bookHolder() {
    return this._bookHolder;
  }

  set bookHolder(value) {
    this._bookHolder = value;
  }

  get dateReturn() {
    return this._dateReturn;
  }

  set dateReturn(value) {
    this._dateReturn = value;
  }
}
