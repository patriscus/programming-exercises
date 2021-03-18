import {pairwise} from "./solution";

describe(`Pairwise`, () => {
    test.each([
        [[1, 4, 2, 3, 0, 5], 7, 11],
        [[1, 3, 2, 4], 4, 1],
        [[1, 1, 1], 2, 1],
        [[0, 0, 0, 0, 1, 1], 1, 10],
        [[], 100, 0],
    ])(`%# test case`, (arr, arg, expected) => {
        expect(pairwise(arr, arg)).toEqual(expected)
    })
})
