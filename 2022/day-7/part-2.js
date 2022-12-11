const { data } = require("./data/data");
const { getFolders } = require("./helpers");

function getSolution(lines) {
  const totalSpace = 70000000;
  const requiredSpace = 30000000;

  const folders = getFolders(lines);
  const root = folders.find((folder) => folder.name === "/");

  const availableSpace = totalSpace - root.size;
  if (availableSpace > requiredSpace) {
    throw new Error("There is already enough space");
  }

  const minSize = requiredSpace - availableSpace;
  const biggerFolders = folders
    .filter((folder) => folder.size >= minSize)
    .sort((a, b) => a.size - b.size);

  console.log(biggerFolders[0].size);
}

getSolution(data);
