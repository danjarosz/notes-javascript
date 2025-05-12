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