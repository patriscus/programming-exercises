import {sameDigits} from "./solution";

describe(`Rendezvous with Cassidoo: sameDigits`, () => {
    test.each([
        [1, true],
        [10, true],
        [251894, true],
        [251895, false],
    ])(`%d should return %p`, (number, expected) => {
        expect(sameDigits(number)).toEqual(expected)
    })
})
