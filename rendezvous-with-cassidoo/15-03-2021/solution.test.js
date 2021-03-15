import { pascals, generatePascalRow } from "./solution";

describe(`pascals`, () => {
    test.each([
        [0, [1]],
        [1, [1,1]],
        [2, [1,2,1]],
        [3, [1,3,3,1]],
    ])(`%# test case`, (row, expected) => {
        expect(pascals(row)).toEqual(expected)
    })
})
