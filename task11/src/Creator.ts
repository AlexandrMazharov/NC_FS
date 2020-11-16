import {Logger} from "./Logger";
@Logger
export class Creator {
    public create<T>(creator: { new(): T }): T {
        return new creator();
    }
}
