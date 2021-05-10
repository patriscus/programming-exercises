const sameDigits = (number) => {
    const set = new Set(number.toString().split(''))
    return Math.pow(number, 3)
        .toString()
        .split('')
        .every(digit => set.has(digit))
}


export { sameDigits }
