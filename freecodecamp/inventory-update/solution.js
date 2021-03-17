const updateInventory = (arr1, arr2) => {
    const result = [...arr1]

    arr2.forEach(inventoryItem => {
        const indexInCurrentInventory = result.findIndex(item => item[1] === inventoryItem[1])
        if (indexInCurrentInventory === -1) {
            result.push(inventoryItem)
            return
        }

        const currentQuantity = result[indexInCurrentInventory][0]
        result[indexInCurrentInventory][0] = inventoryItem[0] + currentQuantity
    })

    return result.sort((a, b) => a[1].localeCompare(b[1]))
}

export { updateInventory }
