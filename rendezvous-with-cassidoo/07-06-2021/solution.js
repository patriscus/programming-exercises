const getDuplicateIfExistent = (input) => {
    for(const entry of input) {
        const occursMoreThanOnce = input.filter(el => el === entry).length > 1
        if (occursMoreThanOnce) {
            return entry
        }
    }

    return null
}

const lonelyNumber = (first, second, third) => {
    const inputs = [first, second, third]

    const allArgumentsAreEqual = first === second && second === third
    if (allArgumentsAreEqual) {
        return 1
    }

    const duplicateEntry = getDuplicateIfExistent(inputs)
    if (duplicateEntry) {
        return inputs.filter(el => el !== duplicateEntry)[0]
    }

    return inputs.reduce((acc, nextValue) => acc * nextValue)
}

export { lonelyNumber }
