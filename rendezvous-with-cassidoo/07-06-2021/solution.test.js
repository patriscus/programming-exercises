import {lonelyNumber} from "./solution";

describe(`lonelyNumber`, () => {
    test.each([
        [[1,2,3], 6],
        [[6,6,4], 4],
        [[7,7,7], 1],
    ])(`%p should return %i`, (inputArray, expected) => {
        expect(lonelyNumber(...inputArray)).toEqual(expected)
    })
})
