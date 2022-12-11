const { data } = require("./data/data");
const { getFolders } = require("./helpers");

function getSolution(lines) {
  const folders = getFolders(lines);
  const sizes = folders.map((directory) => directory.size);

  const solution = sizes
    .filter((size) => size <= 100000)
    .reduce((a, b) => a + b);
  console.log(solution);
}

getSolution(data);
