function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Array must be an array');
    }

    return [...arr].reverse()
}

function reverseArrayInPlace(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Array must be an array');
    }

    return arr.reverse()
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]