const { data } = require("./data/data");
const { Forest } = require("./helpers/forest");

function getVisibleTrees(forest) {
  const visibleTrees = [];

  // Loop through ranges of trees
  for (let x = 0; x < forest.rows.length; x += 1) {
    const row = forest.rows[x];

    // Loop through each tree
    for (let y = 0; y < row.length; y += 1) {
      // Move through the forest
      forest.move(x, y);

      // Keep the current tree if it is visible
      if (forest.currentTree.isVisible()) {
        visibleTrees.push(forest.currentTree);
      }
    }
  }
  return visibleTrees;
}

function getSolution(input) {
  const forest = new Forest(input);
  const visibleTrees = getVisibleTrees(forest);

  console.log(visibleTrees.length);
}

getSolution(data);
