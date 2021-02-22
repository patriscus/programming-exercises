import { everyOther } from "./solution";

describe('everyOther', () => {
    test.each(
        [
            ['xxyxxy', 2],
            ['yyyyy', 4],
            ['', 0],
            ['xyxyxy', 0],
        ])('"%s" should have %d deletions', (str, expected) => {
        expect(everyOther(str)).toBe(expected);
    });
})
