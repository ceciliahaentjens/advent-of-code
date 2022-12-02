const path = require("path");
const fs = require("fs");

function readInput(pathToTxt) {
  const input = fs
    .readFileSync(path.join(pathToTxt, "input.txt"), "utf8")
    .toString()
    .trim()
    .split("\n\n");

  return input;
}

module.exports = { readInput };
