const { data } = require("./data/data");

// Score
const score = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

const total = data
  .map(([opponent, me]) => {
    const oScore = score[opponent];
    const mScore = score[me];

    // It’s a draw
    // A vs X | B vs Y | C vs Z
    if (mScore === oScore) {
      return mScore + 3;
    }
    // It’s a win
    // C vs X | A vs Y | B vs Z
    if (mScore - oScore === 1 || mScore - oScore === -2) {
      return mScore + 6;
    }
    // It’s a loss
    return mScore;
  })
  .reduce((a, b) => a + b);

console.log(total);
