import { removeOutermostParentheses, applyPrimitiveDecomposition } from "./solution";

describe('Remove Outermost Parentheses', () => {
    test.each([
        ["(()())(())", "()()()"],
        ["(()())(())(()(()))", "()()()()(())"],
        ["()()", ""],
    ])(`%# test case`, (input, expected) => {
        expect(removeOutermostParentheses(input)).toEqual(expected)
    })

    test.each([
        ["(()())(())", ["(()())", "(())"]],
    ])(`%# decomposition test case`, (input, expected) => {
        expect(applyPrimitiveDecomposition(input)).toEqual(expected)
    })
})
