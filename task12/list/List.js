class Node {
    constructor() {
        this._field = null;
        this._next = null;
        this._prev = null;
    }


    get field() {
        return this._field;
    }

    set field(value) {
        this._field = value;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    get prev() {
        return this._prev;
    }

    set prev(value) {
        this._prev = value;
    }
}

export class List {
    print() {
        let result = "";
        let count = 0;
        let current = this.head;

        while (current.next!= null) {
            result = result + current.field + ", ";
            current = current.next;
            count++;

        }
        return result;
    }

    constructor() {

        this._head = null;
        this._tail = null;
        this._size = -1;
    }

    //Добавить информацию в список в конец
    putToEnd(value) {
        let node = new Node();
        node.field = value;

        if (this.size == -1) {

            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;

            this.tail = node;
        }
        this.size++;

    }

    //Получить информацию из списка по индексу.
    getByIndex(index) {
        if (index < 0 || index > this.size) return false;
        else {

            let count = 0;
            let current = this.head;

            while (count !== index) {
                current = current.next;
                count++;
            }
            return current.field;
        }

    }

    //Добавить информацию в список  по индексу.
    setByIndex(index, value) {
        if (index < 0) return false;
        else if (index > this.size) {
            this.putToEnd(value)
        } else {
            let count = 0;
            let current = this.head;

            while (count !== index) {
                current = current.next;
                count++;
            }
            current = current.prev;
            let newNode = new Node();
            newNode.field = value;

            current.next.prev = newNode;
            newNode.next = current.next;

            current.next = newNode;
            newNode.prev = current;
            this.size++;
        }
    }

    // Отредактировать элемент списка.
    edit(index, newValue) {
        if (index < 0 || index > this.size) return false
        else {
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
            current.field = newValue;
        }
    }

    dellete(index) {
        if (index < 0 || index > this.size) return false
        else {
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
            current.prev.next = current.next
            current.next.prev = current.prev;
        }
        this.size--;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get tail() {
        return this._tail;
    }

    set tail(value) {
        this._tail = value;
    }
}
