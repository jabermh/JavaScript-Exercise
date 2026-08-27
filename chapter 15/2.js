function selectionSortWithComparisons(arr) {
    let comparisons = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            comparisons++;

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return comparisons;
}

const array5 = [5, 4, 3, 2, 1];
const array10 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const array20 = Array.from({ length: 20 }, (_, i) => 20 - i);

console.log("Length 5:", selectionSortWithComparisons(array5));
console.log("Length 10:", selectionSortWithComparisons(array10));
console.log("Length 20:", selectionSortWithComparisons(array20));