const validTTTPosition = (board) => {
    const counts = getCounts(board)
    return !startedWithOPlayer(counts)
    && xPlayerIsMaxOneRoundAhead(counts)
    && onlyOnePlayerWon(board)
}

const onlyOnePlayerWon = board => {
    const xWon = didPlayerWin(board, 'X')
    const oWon = didPlayerWin(board, 'O')

    return !(xWon && oWon)
}

const isWinInADiagonal = (board, player) => {
    const wonTopLeftToBottomRight = board.reduce((acc, value, i) => {
        if (value[i] === player) {
            acc += 1
        }

        return acc
    }, 0) === 3

    if (wonTopLeftToBottomRight) {
        return true
    }

    const ticTacToeGridSize = 3
    return board.reduce((acc, value, i) => {
        if (value[ticTacToeGridSize - 1 - i] === player) {
            acc += 1
        }

        return acc
    }, 0) === 3
}

const isWinInARow = (board, player) => {
    for (const row of board) {
        if (row.split('').every(char => char === player)) {
            return true
        }
    }

    return false
};

const isWinInAColumn = (board, player) => {
    const ticTacToeGridSize = 3
    for (let i = 0; i < ticTacToeGridSize; i++) {
        let playerWon = true
        for (let j = 0; j < ticTacToeGridSize; j++) {
            if (board[j][i] !== player) {
                playerWon = false
            }
        }

        if (playerWon) {
            return true
        }
    }

    return false
}

const didPlayerWin = (board, player) => {
    return isWinInARow(board, player) ||
        isWinInAColumn(board, player) ||
        isWinInADiagonal(board, player)
}

const getCounts = board => {
    return board.reduce((acc, val) => {
        val.split('').forEach(char => {
            if (char === 'O') {
                acc.oCount += 1;
            } else if (char === 'X') {
                acc.xCount += 1;
            }
        })

        return acc
    }, {xCount: 0, oCount: 0});
};

const xPlayerIsMaxOneRoundAhead = counts => {
    return Math.abs(counts.xCount - counts.oCount) <= 1
}

const startedWithOPlayer = counts => {
    return counts.xCount < counts.oCount;
}

export { validTTTPosition, isWinInAColumn, isWinInARow, isWinInADiagonal }
