import {permutationsWithoutConsecutiveLetters} from "./solution";

describe(`FreeCodeCamp: No repeats please`, () => {
  test.each([
    ['aab', 2],
    ['aaa', 0],
    ['aabb', 8],
    ['abcdefa', 3600],
    ['abfdefa', 2640],
    ['zzzzzzzz', 0],
    ['a', 1],
    ['aaab', 0],
    ['aaabb', 12],
  ])(`#% test case`, (str, expected) => {
    expect(permutationsWithoutConsecutiveLetters(str)).toEqual(expected)
  })
})