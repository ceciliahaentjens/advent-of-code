const { readData } = require("../../helpers/data");

const data = readData(__dirname).split("\n\n");

module.exports = { data };
