const { readInput } = require("../../helpers/input");

const input = readInput(__dirname);

const highestKcal = input
  .map((elf) =>
    elf
      .split("\n")
      .map((kcal) => parseInt(kcal, 10))
      .reduce((total, cur) => total + cur, 0)
  )
  .reduce((prev, cur) => (cur > prev ? cur : prev));

console.log(highestKcal);
