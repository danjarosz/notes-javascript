function deepEqual(obj1, obj2) {
    let areEqual = true;

    Object.keys(obj1).forEach((key) => {
        if (!areEqual) {
            return;
        }

        const keysOfObj2 = Object.keys(obj2);

        if (!keysOfObj2.includes(key)) {
            areEqual = false;
        }

        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 !== typeof value2) {
            areEqual = false;
        }

        if (typeof value1 === "object" && typeof value2 === "object") {
            return deepEqual(value1, value2);
        }

        if (value1 !== value2) {
            areEqual = false;
        }
    })

    return areEqual;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "asn"}, object: 2}));
// → true