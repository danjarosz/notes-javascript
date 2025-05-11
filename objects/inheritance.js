class List {
    constructor(value, rest) {
        this.value = value;
        this.rest = rest;
    }

    get length() {
        return 1 + (this.rest ? this.rest.length : 0);
    }

    static fromArray(array) {
        let result = null;
        for (let i = array.length - 1; i >= 0; i--) {
            result = new this(array[i], result);
        }
        return result;
    }
}

class LengthList extends List {
    #length;

    constructor(value, rest) {
        super(value, rest);
        this.#length = super.length;
    }

    get length() {
        return this.#length;
    }
}

console.log(LengthList.fromArray([1, 2, 3, 7]).length);
// → 3