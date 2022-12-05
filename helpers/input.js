const path = require("path");
const fs = require("fs");

function readData(dirPath) {
  const input = fs
    .readFileSync(path.join(dirPath, "input.txt"), "utf8")
    .toString()
    .trim();

  return input;
}

module.exports = { readData };
