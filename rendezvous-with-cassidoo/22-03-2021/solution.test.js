import { maxNum } from "./solution";

describe(`Largest number`, () => {
    test.each([
        [
            [3,4,6,5], [9,0,2,5,8,3], 5, 98655
        ],
        [
            [1, 3, 2], [3, 2], 2, 33
        ],
        [
            [1, 3, 2], [3, 2], 3, 332
        ],
        [
            [], [], 3, 0
        ],
    ])(`%# test case`, (n, m, k, expected) => {
        expect(maxNum(n, m, k)).toEqual(expected)
    })
})
