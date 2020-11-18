import {Logger} from "./Logger.js";


export class Creator {

    @Logger
    public create<T>(creator: { new(): T }): T {
        return new creator();
    }
}
