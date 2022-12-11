const { data: sections } = require("./data/data");

const pairs = sections.filter(([aRange, bRange]) => {
  const [aFrom, aTo] = aRange;
  const [bFrom, bTo] = bRange;

  return (aFrom >= bFrom && aTo <= bTo) || (bFrom >= aFrom && bTo <= aTo);
});

console.log(pairs.length);
