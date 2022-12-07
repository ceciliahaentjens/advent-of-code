const { data } = require("./data/data");
const { getProcessedCharacters } = require("./helpers/helper");

const char = getProcessedCharacters(data, 4);

console.log(char);
