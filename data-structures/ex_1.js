function range(start, end, step = 1) {
    if (start >= end) {
        throw new Error("starts must be greater than the end of range");
    }

    const arr = [];

    for(let i = start; i <= end; i = i + step) {
        arr.push(i)
    }

    console.log(arr)
    return arr;
}

function sum(numbers){
    if (!Array.isArray(numbers)){
        throw new Error("numbers must be an array");
    }

    return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sum(range(1, 10)));