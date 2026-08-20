const numbers = [1, 2, 3, 4, 5, 6, 8, 9];

const evenCount = numbers.reduce((count, number) => {
    if (number % 2 === 0) {
        return count + 1;
    }

    return count;
}, 0);

console.log(evenCount);