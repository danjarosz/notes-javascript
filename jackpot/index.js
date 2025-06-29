function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

const five = getUnqueNumbers(5, 1, 50, [])
const two = getUnqueNumbers(2, 1, 12, [])
console.log({
    five, two
})