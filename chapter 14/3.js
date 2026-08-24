function countOccurrences(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

const numbers = [2, 5, 2, 7, 2, 9, 5];

console.log(countOccurrences(numbers, 2));