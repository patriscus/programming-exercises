const inits = (inputArr) => {
    const result = []

    for (let i = 0; i <= inputArr.length; i++) {
        result.push(inputArr.slice(0, i))
    }

    return result
}

export { inits }
