const { data: elves } = require("./data/data");

const threeHighestKcal = elves
  .map((elf) =>
    elf
      .split("\n")
      .map((kcal) => parseInt(kcal, 10))
      .reduce((total, cur) => total + cur, 0)
  )
  .sort((first, last) => last - first)
  .splice(0, 3)
  .reduce((total, cur) => total + cur, 0);

console.log(threeHighestKcal);
