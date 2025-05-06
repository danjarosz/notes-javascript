const day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
}

console.log(day1.squirrel);
console.log(day1.events);

console.log(day1.wolf);
day1.wolf = true;
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
};

console.log(descriptions.work);
console.log(descriptions['touched tree']);

const someObj = {
    left: 1,
    right: 2,
}

console.log(someObj);
console.log("left" in someObj);
console.log("right" in someObj);
delete someObj.left;
console.log(someObj);
console.log("left" in someObj);
console.log("right" in someObj)

someObj.up = 3
console.log(Object.keys(someObj));
console.log(Object.values(someObj))

for (let key in someObj) {
    console.log(someObj[key]);
}

// ------------------------------------------

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
    /* And so on... */
];

console.log(journal);

// ----------------
const str = "cat"
str[0]= "r"
console.log(str, str[0])