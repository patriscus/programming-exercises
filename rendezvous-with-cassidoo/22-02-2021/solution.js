const everyOther = (string) => {
    return string
        .split('')
        .reduce((acc, char, i) => char === string[i - 1] ? acc + 1 : acc, 0)
}

export { everyOther }
