const { readData } = require("../../../helpers/input");

// Read data
const data = readData(__dirname)
  .split("\n")
  .map((v) => v.split(" "));

module.exports = { data };
