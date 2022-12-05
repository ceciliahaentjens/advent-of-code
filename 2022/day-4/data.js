const { readData } = require("../../helpers/input");

const data = readData(__dirname)
  .split("\n")
  .map((group) =>
    group.split(",").map((elf) => elf.split("-").map((nb) => parseInt(nb, 10)))
  );

module.exports = { data };
