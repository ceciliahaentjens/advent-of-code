const { data: rounds } = require("./data/data");

// Score
const score = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
};

const total = rounds
  .map(([aPlayer, bPlayer]) => {
    const aScore = score[aPlayer];
    const bScore = score[bPlayer];

    // It’s a draw
    // A vs X | B vs Y | C vs Z
    if (bScore === aScore) {
      return bScore + 3;
    }
    // It’s a win
    // C vs X | A vs Y | B vs Z
    if (bScore - aScore === 1 || bScore - aScore === -2) {
      return bScore + 6;
    }
    // It’s a loss
    return bScore;
  })
  .reduce((a, b) => a + b);

console.log(total);
