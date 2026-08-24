function linearSearch(arr, target) {
    let comparisons = 0;

    for (let i = 0; i < arr.length; i++) {
        comparisons++;

        if (arr[i] === target) {
            return comparisons;
        }
    }

    return comparisons;
}

const numbers = [10, 25, 40, 55, 70, 85, 91, 100];

console.log(linearSearch(numbers, 91));