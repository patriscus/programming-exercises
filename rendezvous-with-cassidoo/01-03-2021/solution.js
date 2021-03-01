const numberOfCans = (room, canCoverage) => {
    const sum = (room.length * room.height * 2) + (room.width * room.height * 2)
    let cans = 1;
    while (canCoverage * cans < sum) {
        cans += 1;
    }

    return cans
}

export { numberOfCans }
