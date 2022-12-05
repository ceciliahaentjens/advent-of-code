const { data } = require("./data");

const pairs = data.filter(([aElf, bElf]) => {
  const [aFrom, aTo] = aElf;
  const [bFrom, bTo] = bElf;

  return (aFrom >= bFrom && aTo <= bTo) || (bFrom >= aFrom && bTo <= aTo);
});

console.log(pairs.length);
