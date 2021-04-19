import {moveZeroes} from "./solution";

describe(`Rendezvous with Cassidoo: moveZeroes`, () => {
    test.each([
        [[0,2,0,3,8], [2,3,8,0,0]],
        [[0,2,0,8,3], [2,8,3,0,0]],
        [[0], [0]],
        [[2,0], [2,0]],
        [[2,0,4], [2,4,0]],
        [[0,0,0,0,1], [1,0,0,0,0]],
        [[], []],
    ])(`%p is %p sorted`, (arr, expected) => {
        expect(moveZeroes(arr)).toEqual(expected);
    })
})
