const climbingLeaderboard = (scores, player) => {
    return player.map(playerScore => {
        const leaderboard = [playerScore, ...scores]
        const sanitizedLeaderboard = [...new Set(leaderboard.sort((a, b) => b - a))]
        return sanitizedLeaderboard.findIndex(leaderboardScore => leaderboardScore === playerScore) + 1
    })
}

export { climbingLeaderboard }
