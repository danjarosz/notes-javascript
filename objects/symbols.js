let sym = Symbol("name");
let sym_2 = Symbol("name")
console.log(sym === Symbol("name"));
console.log(sym == sym_2);
console.log("name" === "name")
console.log(sym)
// → false

const length = Symbol('length')

let myTrip = {
    length: 2,
    0: "Lankwitz",
    1: "Babelsberg",
    [length]: 21500
};
console.log(myTrip[length], myTrip.length);
// → 21500 2

// ITERATOR
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

const arr1 = [1,4, 5, 10]
const arr1Iterator = arr1[Symbol.iterator]()
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())
console.log(arr1Iterator.next())
