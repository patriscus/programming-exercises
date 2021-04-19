/*
$ moveZeroes([0,2,0,3,8])
$ [2,3,8,0,0]
 */

const moveZeroes = arr => {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        let smallestNumber = arr[i]
        let wasAllZeroes = true
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] !== 0) {
                wasAllZeroes = false
            }

            if (smallestNumber === 0 && arr[j] !== 0) {
                smallestIndex = j
                smallestNumber = arr[j]
                break
            }
        }

        if (wasAllZeroes) {
            break
        }

        const tmp = arr[i]
        arr[i] = arr[smallestIndex]
        arr[smallestIndex] = tmp
    }

    return arr;
}

export { moveZeroes }
