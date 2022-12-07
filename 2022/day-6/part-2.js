const { data } = require("./data/data");
const { getProcessedCharacters } = require("./helpers/duplicate");

const char = getProcessedCharacters(data, 14);

console.log(char);
