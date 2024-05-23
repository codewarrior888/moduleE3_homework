function elementSort(array) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let element of array) {
        if (typeof element === 'number' && !isNaN(element)) {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Чётных элементов: ${evenCount}`);
    console.log(`Нечётных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
}

elementSort([1, 4, null, NaN, 'a', 0, 6])