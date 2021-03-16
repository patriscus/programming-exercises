const removeOutermostParentheses = input => {
    const primitives = applyPrimitiveDecomposition(input)
    return primitives
        .map(primitive => primitive.split('').slice(1, -1).join(''))
        .join('')
}

const applyPrimitiveDecomposition = input => {
    let leftParentheseCount = 0
    let startSubstringIndex = 0

    const res = []
    for (let i = 0; i < input.length; i++) {
        const char = input[i]

        if (char === '(') {
            leftParentheseCount += 1
        }

        if (char === ')') {
            leftParentheseCount -= 1

            if (leftParentheseCount === 0) {
                res.push(input.substring(startSubstringIndex, i + 1))
                startSubstringIndex = i + 1
            }
        }
    }
    return res
}

export { removeOutermostParentheses, applyPrimitiveDecomposition }
