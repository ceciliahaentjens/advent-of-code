const { readData } = require("../../helpers/input");

const data = readData(__dirname).split("\n\n").trim();

module.exports = { data };
