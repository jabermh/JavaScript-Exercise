function sumToRecursive(n) {
    if (n <= 1) {
        return n;
    }

    return n + sumToRecursive(n - 1);
}

function sumToLoop(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumToRecursive(5));
console.log(sumToLoop(5));