const { data: rucksacks } = require("./data/data");
const { findSameChar, getPriority } = require("./helpers/helper");

const total = rucksacks
  .map((rucksack) => {
    const middle = Math.round(rucksack.length / 2);

    // Get compartiments
    const comp1 = rucksack.substring(0, middle);
    const comp2 = rucksack.substring(middle, rucksack.length);

    // Get priority
    const char = findSameChar([comp1, comp2]);
    return getPriority(char);
  })
  .reduce((a, b) => a + b);

console.log(total);
