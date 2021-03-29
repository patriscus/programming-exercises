import {validStringNumber} from "./solution";

describe(`Rendezvous with Cassidoo: Valid string number`, () => {
    test.each([
        ["7", true],
        ["0011", true],
        ["+3.14", true],
        ["4.", true],
        ["-.9", true],
        ["-123.456", true],

        ["abc", false],
        ["1a", false],
        ["e8", false],
        ["–6", false],
        ["-+3", false],
        ["95x54e53.", false],
    ])(`%s should return %p`, (str, expected) => {
        expect(validStringNumber(str)).toEqual(expected)
    })
})
