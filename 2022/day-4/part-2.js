const { data } = require("./data/data");

const pairs = data.filter(([aElf, bElf]) => {
  const [aFrom, aTo] = aElf;
  const [bFrom, bTo] = bElf;

  return !(aTo < bFrom || bTo < aFrom);
});

console.log(pairs.length);
