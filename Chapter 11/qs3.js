function findLargestNumber(numbers) {
    let largestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;
}

function printLargestNumber(numbers) {
    const largestNumber = findLargestNumber(numbers);
    console.log("Largest number:", largestNumber);
}

const numbers = [3, 7, 2, 9, 4];

printLargestNumber(numbers);