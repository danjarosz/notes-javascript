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

function drawLine(chars, sign_1, sign_2) {
    let line = ""
    for (let j = 1; j <= chars; j++) {
        if (j % 2 === 0) {
            line += sign_1
        } else {
            line += sign_2
        }
    }
    return line
}

function draw_field(lines, chars_per_line) {
    for (let i = 1; i <= lines; i++) {
        if (i % 2 === 0) {
            const line = drawLine(chars_per_line, " ", "#")
            console.log(line)
        } else {
            const line = drawLine(chars_per_line, "#", " ")
            console.log(line)
        }
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



console.log("Wih function")
draw_field(4, 10)