import {climbingLeaderboard} from "./solution";

describe(`climbingLeaderboard`, () => {
    test.each([
        [
            [100, 90, 90, 80],
            [70, 80, 105],
            [4, 3, 1],
        ],
        [
            [100, 100, 50, 40, 40, 20, 10],
            [5, 25, 50, 120],
            [6, 4, 2, 1],
        ],
        [
            [100, 90, 90, 80, 75, 60],
            [50, 65, 77, 90, 102],
            [6, 5, 4, 2, 1],
        ],

    ])(`%# case`, (ranks, players, expected) => {
        expect(climbingLeaderboard(ranks, players)).toEqual(expected)
    })
})
