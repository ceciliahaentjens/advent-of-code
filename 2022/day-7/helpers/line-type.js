function isMovingInstruction(str) {
  return str.startsWith("$ cd");
}

function isDirectory(str) {
  return str.startsWith("dir ");
}

function isFile(str) {
  return /^\d/.test(str);
}

module.exports = {
  isMovingInstruction,
  isDirectory,
  isFile,
};
