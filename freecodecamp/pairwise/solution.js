const pairwise = (arr, arg) => {
    const usedIndices = new Set()
    const pairs = []

    for (let i = 0; i < arr.length; i++) {
        const leftNumber = arr[i]
        if (usedIndices.has(i)) {
            continue
        }

        for (let j = i + 1; j < arr.length; j++) {
            if (usedIndices.has(i)) {
                break
            }

            if(usedIndices.has(j)) {
                continue
            }

            const rightNumber = arr[j]
            const formsPair = leftNumber + rightNumber === arg
            if (!formsPair) {
                continue
            }

            usedIndices.add(i)
            usedIndices.add(j)
            pairs.push([i, j])
        }
    }

    return pairs
        .map(([left, right]) => left + right)
        .reduce((acc, value) => acc + value, 0)
};

export { pairwise }
