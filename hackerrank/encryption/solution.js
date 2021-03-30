const createGrid = (str, rowCount, columnCount) => {
    const result = []
    for (let i = 0; i < str.length; i += columnCount) {
        result.push(str.substring(i, i + columnCount))
    }
    return result
}

const joinColumns = (grid) => {
    const columnCount = grid[0].length

    let result = ''
    for (let column = 0; column < columnCount; column++) {
        let row = 0;
        result += ' '
        while (grid[row] !== undefined) {
            result += grid[row][column] || ''
            row++
        }
    }

    return result.trim()
}

const encrypt = str => {
    const sanitizedString = str.replace(/ /g, '')
    const sqrt = Math.sqrt(sanitizedString.length)

    const grid = createGrid(sanitizedString, Math.floor(sqrt), Math.ceil(sqrt))
    return joinColumns(grid)
}

export { encrypt }
