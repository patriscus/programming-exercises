import {validTTTPosition, isWinInARow, isWinInAColumn, isWinInADiagonal} from './solution'


describe(`validTTTPosition`, () => {
    test.each([
        [["XOX", " X ", "   "], false],
        [["XOX", "O O", "XOX"], true],
        [["OOO", "   ", "XXX"], false],
        [["  O", "   ", "   "], false],
    ])(`%# test case`, (board, expected) => {
        expect(validTTTPosition(board)).toEqual(expected)
    })

    test.each([
        [["XXX", " OO", "   "], 'X', true],
        [["X  ", "XX ", "OOO"], 'X', false],
        [["X  ", "XX ", "OOO"], 'O', true],
        [["OOO", "   ", "XXX"], 'O', true],
        [["OOO", "   ", "XXX"], 'X', true],
    ])(`%# row win`, (board, player, expected) => {
        expect(isWinInARow(board, player)).toEqual(expected)
    })

    test.each([
        [["XXX", " OO", "   "], 'X', false],
        [["X  ", "XX ", "XOO"], 'X', true],
        [["X  ", " X ", "  X"], 'X', false],
        [["OOO", "O  ", "OXX"], 'O', true],
    ])(`%# column win`, (board, player, expected) => {
        expect(isWinInAColumn(board, player)).toEqual(expected)
    })

    test.each([
        [["X  ", " X ", "  X"], 'X', true],
        [["  X", " X ", "X  "], 'X', true],
        [["  X", " X ", " X "], 'X', false],
        [["  X", " X ", "X  "], 'O', false],
    ])(`%# diagonal win`, (board, player, expected) => {
        expect(isWinInADiagonal(board, player)).toEqual(expected)
    })
})
