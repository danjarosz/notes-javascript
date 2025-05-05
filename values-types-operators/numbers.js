const num = 1;
console.log(num)
console.log(typeof num)

// Sum
console.log("Sum: ", 1 + 1)

// Subtraction
console.log("Subtraction: ", 5 - 2)

// Multiplying
console.log("Multiplying: ", 5 * 5)

// Division
console.log("Division: ", 10 / 5)

// The rest of the division
console.log("The rest: ", 11 % 5)

// The order of actions is the same as in maths.

/**
 * Special numbers
 * There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers.
 * The first two are Infinity and -Infinity, which represent the positive and negative infinities.
 * Infinity - 1 is still Infinity, and so on. Don’t put too much trust in infinity-based computation, though.
 * It isn’t mathematically sound, and it will quickly lead to the next special number: NaN.
 *
 * NaN stands for “not a number”, even though it is a value of the number type. You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero), Infinity - Infinity, or any number of other numeric operations that don’t yield a meaningful result.
 *
 */

console.log("0/0", 0/0, typeof 0/0)
console.log("Infinity", Infinity, typeof Infinity)
console.log("-Infinity", -Infinity, typeof -Infinity)