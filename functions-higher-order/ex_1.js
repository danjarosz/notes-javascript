let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr){
    return arr.reduce((a,b) => {
        // return [...a, ...b]
        return a.concat(b)
    })
}

console.log(flatten(arrays))
// → [1, 2, 3, 4, 5, 6]