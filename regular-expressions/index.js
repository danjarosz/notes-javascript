const re1 = new RegExp('abc')
const re2 = /abc/

console.log(re2.test('abc'))
// true
console.log(re2.test('Abc'))
// false
console.log(re2.test('0abcd'))
// true
console.log(re2.test('abxcd'))
// false
console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true

// Groups of characters

// \d	Any digit character
// \w	An alphanumeric character (“word character”)
// \s	Any whitespace character (space, tab, newline, and similar)
// \D	A character that is not a digit
// \W	A nonalphanumeric character
// \S	A nonwhitespace character
// .	Any character except for newline

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true

const nonHex = /[^0123456789ABCDEF]/
console.log(nonHex.test("A8B21Z"))
// -> true
console.log(nonHex.test("A8B211"))
// -> false

const hexColor = /#[0123456789ABCDEF]{6}/
console.log(hexColor.test('#A8B21Z'))
// false
console.log(hexColor.test('#A8B21B'))
// true
console.log(hexColor.test('A8B21B'))
// false

let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

console.log(new Date(-9999999999999))

function getDate(string) {
    let [_, month, day, year] =
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)