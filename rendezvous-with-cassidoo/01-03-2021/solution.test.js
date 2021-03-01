import { numberOfCans } from "./solution";

describe(`numberOfCans`, () => {
    test.each([
        [{ length: 15, width: 15, height: 15 }, 200, 5],
        [{ length: 2, width: 10, height: 3 }, 200, 1],
        [{ length: 12, width: 10, height: 9 }, 200, 2],
    ])(`%# test case`, (room, canCoverage, expected) => {
        expect(numberOfCans(room, canCoverage)).toEqual(expected)
    })
})
