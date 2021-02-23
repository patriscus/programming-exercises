const diagonalDifference = (arr) => {
    const leftToRight = arr.reduce((acc, row, i) => acc + row[i], 0)
    const rightToLeft = arr.reduce((acc, row, i) => acc + row[(arr.length - 1) - i], 0)
    return Math.abs(leftToRight - rightToLeft)
}

export { diagonalDifference }
