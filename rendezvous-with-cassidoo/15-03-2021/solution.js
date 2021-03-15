const pascals = (row) => {
    let result = generatePascalRow([])
    for (let i = 1; i <= row; i += 1) {
        result = generatePascalRow(result)
    }
    return result
}

const generatePascalRow = (previousRow) => {
    if (previousRow.length === 0) {
        return [1]
    }

    const paddedPreviousRow = [0, ...previousRow, 0]
    const result = []
    for (let i = 0; i < paddedPreviousRow.length - 1; i += 1) {
        result.push(paddedPreviousRow[i] + paddedPreviousRow[i + 1])
    }
    return result
}

export { pascals }
