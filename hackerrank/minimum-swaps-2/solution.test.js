import {minimumSwaps} from "./solution";

describe('HackerRank: Minimum Swaps 2', () => {
    test.each([
        [[7, 1, 3, 2, 4, 5, 6], 5],
        [[1, 3, 2], 1],
        [[2,3,4,1,5], 3],
        [[1,3,5,2,4,6,7], 3],
    ])(`%p requires %d swap(s)`, (input, expected) => {
        expect(minimumSwaps(input)).toEqual(expected)
    })
})
