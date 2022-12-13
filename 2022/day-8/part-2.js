const { data } = require("./data/data");
const { Forest } = require("./helpers/forest");

function getScores(forest) {
  const scores = forest.rows.map((row, x) =>
    row
      .map((tree, y) => {
        // Move through the forest
        forest.move(x, y);

        // Map the score of a tree
        return forest.currentTree.getScenicScore();
      })
      .reduce((a, b) => (a > b ? a : b))
  );
  return scores;
}

function getSolution(input) {
  const forest = new Forest(input);
  const scores = getScores(forest);

  const highestScore = scores.sort((a, b) => b - a);
  console.log(highestScore[0]);
}

getSolution(data);
