import { inits } from "./solution";

describe(`inits`, () => {
    test.each([
        [
            [4, 3, 2, 1],
            [[], [4], [4,3], [4,3,2], [4,3,2,1]],
        ],
        [
            [144],
            [[], [144]],
        ]
    ])(`%p should return %p`, (inputArray, expected) => {
        expect(inits(inputArray)).toEqual(expected)
    })
})
