// It is about abstraction.
// We should make self-descriptive code
// So, do not write directy
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
 */

// BUT:

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// repeatLog(5)

// Or even

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

// repeat(6, console.log)

let labels = []

function pushLabel(i) {
    labels.push(`Unit ${i + 1}`)
}

repeat(5, pushLabel)
console.log(labels)

function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

//---------------------------
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//-----------------
function unless(test, then) {
    if (!test) then();
}

repeat(5, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even