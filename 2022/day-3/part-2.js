const { data: rucksacks } = require("./data/data");
const { findSameChar, getPriority, sliceGroups } = require("./helpers/helper");

const groups = sliceGroups(rucksacks);
const total = groups
  .map((group) => {
    const char = findSameChar(group);
    return getPriority(char);
  })
  .reduce((a, b) => a + b);

console.log(total);
