const { stacks, instructions } = require("./data");

instructions.forEach((instruction) => {
  const toMove = stacks[instruction.from].splice(0, instruction.move);

  // Add the moved crate(s)
  stacks[instruction.to] = toMove.concat(stacks[instruction.to]);
});

const topCrates = stacks.map((stack) => stack.shift()).join("");

console.log(topCrates);
