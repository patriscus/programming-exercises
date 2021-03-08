src: https://buttondown.email/cassidoo/archive/if-you-dont-risk-anything-you-risk-even-more/

Given a string array representing a tic-tac-toe board, return true if and only if it’s possible to reach this board position during the course of a valid tic-tac-toe game. You can assume the first player will always play X first, and players will only fill in blank spaces. The game will end if there is 3 in a row, column, or diagonal, or if the board is full.

Example:

```text
validTTTPosition(["XOX", " X ", "   "])
false
validTTTPosition(["XOX", "O O", "XOX"])
true
validTTTPosition(["OOO", "   ", "XXX"])
false
validTTTPosition(["  O", "   ", "   "])
false
```
