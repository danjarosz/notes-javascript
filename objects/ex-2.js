class Group {
    constructor(values) {
        this.values = values
    }

    static removeDuplicates(arr) {
        if (arr.length === 1) {
            return arr;
        }
        const [val, ...rest] = arr

        if (rest.includes(val)) {
            return this.removeDuplicates(rest)
        }

        return [val, ...this.removeDuplicates(rest)]
    }

    static from(array) {
        return new this(this.removeDuplicates(array))
    }

    add(val) {
        if(this.has(val)) {
            return;
        }

        this.values = [...this.values, val]
    }

    delete(val) {
        this.values = this.values.filter(value => value !== val)
    }

    has(val) {
        return this.values.includes(val)
    }
}

let group = Group.from([10, 20, 20]);
console.log(group.values)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group.values)
group.delete(10);
console.log(group.values)
console.log(group.has(10));
// → false