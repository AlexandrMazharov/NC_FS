export class Work {
  _title;
  _author;
  _genre;

  constructor(title, author, genre) {
    this._title = title;
    this._author = author;
    this._genre = genre;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  get genre() {
    return this._genre;
  }

  set genre(value) {
    this._genre = value;
  }
}
