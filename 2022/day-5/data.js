const { readData } = require("../../helpers/input");

const [stackssData, instructionsData] = readData(__dirname).split("\n\n");

// Clean and get Crates stacks
const strStacks = stackssData.split("\n");
const cratesNb = strStacks.pop().replace(/ /g, "").length;

const stacks = [];
strStacks.forEach((stack) => {
  const crateLength = (stack.length - (cratesNb - 1)) / cratesNb;
  for (let i = 0; i < cratesNb; i += 1) {
    if (!stacks[i]) {
      stacks[i] = [];
    }

    // Example for the first round : crate.slice(0, 3)
    // Then : crate.slice(4, 7) => It allows us to skip spaces between crates
    const crate = stack.slice(crateLength * i + i, crateLength * (i + 1) + i);
    if (crate.trim()) {
      stacks[i].push(crate.replace(/\[|\]/g, ""));
    }
  }
});

// Clean and get instructions
const strInstructions = instructionsData.split("\n");

const instructions = strInstructions.map((instruction) => {
  const [move, from, to] = instruction.match(/\d+/g);
  return {
    move: parseInt(move, 10),
    from: from - 1,
    to: to - 1,
  };
});

module.exports = { stacks, instructions };
