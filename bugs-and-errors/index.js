// Good description here https://eloquentjavascript.net/08_error.html

function canYouSpotTheProblem() {
    "use strict";
    for (let counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined

//-------

function Person(name) {
    'use strict'

    this.name = name;
}
let ferdinand = new Person("Ferdinand"); // oops
console.log(ferdinand.name);
// → Ferdinand

//-----------
// The pattern to recognise error source

class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for (;;) {
    try {
        let dir = promptDirection("Where?");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            throw e;
        }
    }
}