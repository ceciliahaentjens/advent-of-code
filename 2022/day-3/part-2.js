const { data } = require("./data");
const { findSameChar, getPriority, sliceGroups } = require("./helper");

const groups = sliceGroups(data);

const total = groups
  .map((group) => {
    const char = findSameChar(group);
    return getPriority(char);
  })
  .reduce((a, b) => a + b);

console.log(total);
