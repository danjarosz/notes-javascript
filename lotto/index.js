function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 49;

function getUnqueNumbers(amount, min, max, initialNumbers = []) {
    const numbers = [...initialNumbers];
    const number = randomNumber(min, max)

    if(!numbers.includes(number)) {
        numbers.push(number);
    }

    if (numbers.length === amount) {
        return numbers;
    } else {
        return getUnqueNumbers(amount, min, max, numbers)
    }
}

const arr = getUnqueNumbers(6, 1, 49, [])
console.log(arr)