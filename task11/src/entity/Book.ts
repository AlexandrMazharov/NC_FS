import {Work} from "./Work";
import {User} from "./User";

export class Book {
 private _work : Work;
 private _yearPublication : Date;
 private _inventoryNumber : bigint;
 private _bookHolder : User;
 private _dateReturn : Date;


  constructor(work: Work, yearPublication: Date, inventoryNumber: bigint, bookHolder: User, dateReturn: Date) {
    this._work = work;
    this._yearPublication = yearPublication;
    this._inventoryNumber = inventoryNumber;
    this._bookHolder = bookHolder;
    this._dateReturn = dateReturn;
  }

  get work(): Work {
    return this._work;
  }

  set work(value: Work) {
    this._work = value;
  }

  get yearPublication(): Date {
    return this._yearPublication;
  }

  set yearPublication(value: Date) {
    this._yearPublication = value;
  }

  get inventoryNumber(): bigint {
    return this._inventoryNumber;
  }

  set inventoryNumber(value: bigint) {
    this._inventoryNumber = value;
  }

  get bookHolder(): User {
    return this._bookHolder;
  }

  set bookHolder(value: User) {
    this._bookHolder = value;
  }

  get dateReturn(): Date {
    return this._dateReturn;
  }

  set dateReturn(value: Date) {
    this._dateReturn = value;
  }
}
