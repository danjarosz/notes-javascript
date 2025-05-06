// let list = {
//     value: 1,
//     rest: {
//         value: 2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };
//
// console.log(list);

function arrayToList(array = []) {
    const [el, ...rest] = array;

    if (!rest.length) {
        return {
            value: el,
            rest: null
        }
    }

    return {
        value: el,
        rest: arrayToList(rest)
    }
}

function listToArray(list = {}) {
    if (list === null) {
        return []
    }

    const {value, rest} = list;

    if (!rest) {
        return [value]
    }

    return [value, ...listToArray(rest)]
}

function prepend(element, list) {
    const arrayFromList = listToArray(list)
    const newList = arrayToList([element, ...arrayFromList]);

    return newList;
}

function nth(list, index){
    const array = listToArray(list);

    if (index >= array.length) {
        return undefined;
    }

    return array[index]
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20