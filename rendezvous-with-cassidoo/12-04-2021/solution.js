const canPlant = (arr, plants) => {
    const isPotFree = pot => pot === 0
    return arr.filter(isPotFree).length >= plants
}

export { canPlant }
