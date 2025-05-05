// Define f to hold a function value
const f = function(a) {
    console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// A less verbose function value
const h = a => a % 3

// EXERCISE 1
const min = (a, b) => a >= b ? b : a
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// EXERCISE 2
function isEven(n){
    if (n < 0 || n === 1){
        return false
    }

    if (n === 0){
        return true
    }

    return isEven(n - 2)
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

const convertTextToLowercase = text => text.toLowerCase()

const countChar = function (text, char = "B") {
    const sanitizedText = convertTextToLowercase(text)
    const sanitizedChar = convertTextToLowercase(char)

    let count = 0

    for (let i = 0 ; i < sanitizedText.length; i++) {
        if (sanitizedText[i] === sanitizedChar) {
            count++
        }
    }

    return count
}

console.log(countChar("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4