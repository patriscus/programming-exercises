
const minimumSwaps = input => {
    const arr = [...input]
    const swap = (i, j) => {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    // Selection sort
    let swaps = 0
    for (let i = 0; i < arr.length; i++) {
        let lowestIndex = i;
        let lowestNumber = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < lowestNumber) {
                lowestIndex = j
                lowestNumber = arr[j]
            }
        }

        const beginningIsAlreadyLowest = lowestIndex === i
        if (!beginningIsAlreadyLowest) {
            swap(i, lowestIndex)
            swaps += 1
        }
    }

    return swaps
}

export { minimumSwaps }
