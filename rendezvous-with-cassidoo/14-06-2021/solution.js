const printArrow = (direction, indentationLevel) => {
    const lines = []
    for (let i = 0; i < indentationLevel; i++) {
        const asteriskIndex = direction === 'right' ? i : (indentationLevel - 1) - i

        const line = Array.from(' '.repeat(indentationLevel))
        line[asteriskIndex] = '*'

        lines.push(line.join(''))
    }

    const [_, ...mirroredLines] = [...lines].reverse()
    return [...lines, ...mirroredLines].join('\n')
}

export { printArrow }
