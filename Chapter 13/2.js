function findMaxWithLoop(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

function findMaxWithSort(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    return sortedNumbers[sortedNumbers.length - 1];
}

const numbers = [3, 7, 2, 9, 4];

console.log("Using loop:", findMaxWithLoop(numbers));
console.log("Using sort:", findMaxWithSort(numbers));