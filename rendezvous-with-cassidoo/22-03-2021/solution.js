const maxNum = (n, m, k) => {
    const largestNumberString = [...n, ...m]
        .sort((a, b) => b - a)
        .slice(0, k)
        .join('')

    return Number(largestNumberString)
}

export { maxNum }
