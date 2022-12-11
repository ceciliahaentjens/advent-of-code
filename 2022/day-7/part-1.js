const { data: lines } = require("./data/data");
const {
  isMovingInstruction,
  isDirectory,
  isFile,
} = require("./helpers/line-type");

const directories = {};
const path = [];

// Add the root directory
directories["/"] = 0;
lines.forEach((line) => {
  // If it’s a directory
  if (isDirectory(line)) {
    const [dir, bDirName] = line.split(" ");
    directories[bDirName] = 0;
    return;
  }

  // If it’s a moving instruction
  if (isMovingInstruction(line)) {
    // Get the directory name
    const [$, cd, aDirName] = line.split(" ");

    // If it’s not a « go back » instruction (cd ..)
    if (/\.\./gm.test(aDirName)) {
      // Remove the last directory from path array
      path.pop();
    } else {
      // Push the directory in the path array
      path.push(aDirName);
    }
    return;
  }

  // If it’s a file
  if (isFile(line)) {
    const [size, file] = line.split(" ");

    // Loop through current path directories
    path.forEach((directory) => {
      directories[directory] += parseInt(size, 10);
    });
  }
});

// Filter directories
const total = Object.values(directories)
  .filter((size) => size <= 100000)
  .reduce((a, b) => a + b);

console.log(total);
