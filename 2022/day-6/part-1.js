const { data } = require("./data/data");
const { getProcessedCharacters } = require("./helpers/duplicate");

const char = getProcessedCharacters(data, 4);

console.log(char);
