const { data: sections } = require("./data/data");

const pairs = sections.filter(([aRange, bRange]) => {
  const [aFrom, aTo] = aRange;
  const [bFrom, bTo] = bRange;

  return !(aTo < bFrom || bTo < aFrom);
});

console.log(pairs.length);
