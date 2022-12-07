// A function to get the number of processed characters
// Before finding a unique character in a range of X characters
function getProcessedCharacters(characters, rangeLength) {
  let firstMarker;
  for (let i = 0; i < characters.length - (rangeLength - 1); i += 1) {
    const range = characters.slice(i, i + rangeLength).split("");

    // Find a duplicate
    const duplicate = range.filter(
      (char, pos, chars) => chars.indexOf(char) !== pos
    );

    // If we found no duplicate
    if (duplicate.length === 0) {
      // Get the last character position by adding `rangeLength` to the range index
      firstMarker = i + rangeLength;
      break;
    }
  }
  return firstMarker;
}

module.exports = {
  getProcessedCharacters,
};
