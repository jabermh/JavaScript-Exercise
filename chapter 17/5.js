function mostFrequentElement(arr) {
    const frequency = {};

    for (const element of arr) {
        frequency[element] = (frequency[element] || 0) + 1;
    }

    let mostFrequent = arr[0];
    let highestCount = 0;

    for (const element of arr) {
        if (frequency[element] > highestCount) {
            highestCount = frequency[element];
            mostFrequent = element;
        }
    }

    return mostFrequent;
}

const numbers = [1, 3, 2, 3, 4, 3, 2, 2, 2];

console.log(mostFrequentElement(numbers));