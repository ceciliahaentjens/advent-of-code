# ✂️ Day 2 – Rock Paper Scissors

- [Answers and notes](#part-1) for Part One
- [Answers and notes](#part-2) for Part Two

## Instructions

The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (`0` if you lost, `3` if the round was a draw, and `6` if you won).

For example, suppose you were given the following strategy guide&nbsp;:

```
A Y
B X
C Z
```

In this example, if you were to follow the strategy guide, you would get a total score of `15` (`8 + 1 + 6`).
[See more](https://adventofcode.com/2022/day/2)

## Part One

<b>What would your total score be if everything goes exactly according to your strategy guide&nbsp;? Answer&nbsp;: `12586`</b>

### Notes

I first mapped in a constant the score for rock, paper and scissors&nbsp;:

```js
const score = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};
```

Then, I mapped the array to replace the `round` by the `score` of `bPlayer` according to certain conditions&nbsp;:

- If `(bScore === aScore)`, it’s a draw.
- If `(bScore - aScore === 1 || bScore - aScore === -2)`, it’s a win because it means we either played `C` against `X` resulting in a total score of `2`, either `B` against `X` or `C` against `Z` resulting in a total score of `-1`.
- Else, it means it’s a loss.

To get the final result, I just needed to reduce the array by an addition of all values.

## Part Two

The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end&nbsp;: `X` means you need to lose, `Y` means you need to end the round in a draw, and `Z` means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

- In the first round, your opponent will choose Rock (`A`), and you need the round to end in a draw (`Y`), so you also choose Rock. This gives you a score of `1 + 3 = 4`.
- In the second round, your opponent will choose Paper (`B`), and you choose Rock so you lose (`X`) with a score of `1 + 0 = 1`.
- In the third round, you will defeat your opponent's Scissors with Rock for a score of `1 + 6 = 7`.

<b>Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide&nbsp;? Answer&nbsp;: `13193`</b>

### Notes

In the second part, `X`, `Y` and `Z` are not what the second player played but how the round needs to end.<br />
I used a constant to map each case&nbsp;

```js
const score = {
  A: {
    X: 3, // Must lose : Choose Scissor (3)
    Y: 4, // Must draw (3) : Choose Rock (1)
    Z: 8, // Must win (6) : Choose Paper (2)
  },
  B: {
    X: 1, // Must lose : Choose Rock (1)
    Y: 5, // Must draw (3) : Choose Paper (2)
    Z: 9, // Must win (6) : Choose Scissor (3)
  },
  C: {
    X: 2, // Must lose : Choose Paper (2)
    Y: 6, // Must draw (3) : Choose Scissor (3)
    Z: 7, // Must win (6) : Choose Rock (1)
  },
};
```

For example&nbsp;: If `aPlayer` chose `A` which corresponds to Rock and I received the instrustion `Z` meaning I have to win, I need to play Paper resulting in a total score of `8` (= 6 points for a win and 2 points for playing paper). To get that score, I just have to get the `score` for `[A][Z]`.

Then, I just needed to reduce the array by an addition of all values.
