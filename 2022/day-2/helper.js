const { readData } = require("../../helpers/data");

// Read data
const data = readData(__dirname)
  .split("\n")
  .map((v) => v.split(" "));

module.exports = { data };
