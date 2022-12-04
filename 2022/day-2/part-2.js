const { data } = require("./helper");

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

const total = data
  .map(([opponent, instruction]) => score[opponent][instruction])
  .reduce((a, b) => a + b);

console.log(total);
