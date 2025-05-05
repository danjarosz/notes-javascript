// LOOPS
// - for
// - until
// - do while

//KEYWORDS
// - break;
// - continue;

console.log("For")
let textLet = ""
for (let i = 0; i <= 7; i++) {
    textLet += "#"
    console.log(textLet)
}

console.log("Until")
let textUntil = ""
let iterator = 0
while (iterator <= 7) {
    textUntil += "#"
    console.log(textUntil)
    iterator++
}

console.log("DO While")
let textDoUntil = ""
iterator = 0
do {
    textDoUntil += "#"
    console.log(textDoUntil)
    iterator++
} while (iterator < 7)

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

const chars_per_line = 10
const lines = 10

for (let i = 1; i <= lines; i++) {
    if (i % 2 === 0) {
        let line = ""
        for (let j = 1; j <= chars_per_line; j++) {
            if (j % 2 === 0) {
                line += " "
            } else {
                line += "#"
            }
        }
        console.log(line)
    } else {
        let line = ""
        for (let j = 1; j <= chars_per_line; j++) {
            if (j % 2 === 0) {
                line += "#"
            } else {
                line += " "
            }
        }
        console.log(line)
    }
}



