import {canPlant} from "./solution";

describe(`Rendezvous with Cassidoo: canPlant`, () => {
    test.each([
        [[1,0,0,0,1], 1, true],
        [[1,0,0,0,1], 4, false],
        [[1,0,0,0,1], 3, true],
        [[1,1,1,1,1], 1, false],
        [[0,0,0,0,0], 6, false],
    ])(`%# test case`, (arr, plants, expected) => {
        expect(canPlant(arr, plants)).toEqual(expected)
    })
})
