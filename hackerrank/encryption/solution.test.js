import {encrypt} from "./solution";

describe(`HackerRank: Encryption`, () => {
    test.each([
        [
            'if man was meant to stay on the ground god would have given us roots',
            'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau',
        ],
        [
            'haveaniceday',
            'hae and via ecy',
        ],
        [
            'feedthedog',
            'fto ehg ee dd',
        ],
        [
            'chillout',
            'clu hlt io'
        ]
    ])(`'%s' is '%s' encrypted`, (str, expected) => {
        expect(encrypt(str)).toMatch(expected);
    })
})
