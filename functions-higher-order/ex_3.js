function every(array, test) {
    let good = true;

    array.forEach(value => {
        const count = test(value)
        if (!count && good) {
            good = false
        }
    })

    return good
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
