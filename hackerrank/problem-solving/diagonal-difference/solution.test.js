import { diagonalDifference } from "./solution";

describe('diagonalDifference', () => {
    test.each(
        [
            [[
                [1, 2, 3],
                [4, 5, 6],
                [9, 8, 9]
            ], 2],
        ])('%# should have correct diagonal difference', (array, expected) => {
        expect(diagonalDifference(array)).toBe(expected);
    });
})
