import {Genre} from "./Genre";
import {Author} from "./Author";

export class Work {
    private _title: string;
    private _author: Author;
    private _genre: Genre;

    constructor(title : string, author : Author, genre : Genre) {
        this._title = title;
        this._author = author;
        this._genre = genre;
    }

    get title(): string {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author(): Author {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get genre(): Genre {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }
}
