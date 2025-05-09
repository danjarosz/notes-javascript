function loop(n, test, next, then) {
    if (!test(n)) {
        return;
    }

    then(n)
    loop(next(n), test, next, then)
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1