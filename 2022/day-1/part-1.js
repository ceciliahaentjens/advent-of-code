const { data } = require("./data");

const highestKcal = data
  .map((elf) =>
    elf
      .split("\n")
      .map((kcal) => parseInt(kcal, 10))
      .reduce((total, cur) => total + cur, 0)
  )
  .reduce((prev, cur) => (cur > prev ? cur : prev));

console.log(highestKcal);
