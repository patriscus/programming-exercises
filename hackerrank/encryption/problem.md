src: https://www.hackerrank.com/challenges/encryption/problem

An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let  be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

**Example**:

`s = if man was meant to stay on the ground god would have given us roots`

After removing spaces, the string is `54` characters long. The square root of 54 is between 7 and 8, so it is written in the form of a grid of 7 rows and 8 columns.

```text
ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots
```

The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:

`imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau`

