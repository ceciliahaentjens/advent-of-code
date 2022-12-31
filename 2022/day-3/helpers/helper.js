// Find the duplicate character between an indefinite number of strings
function findSameChar(strings) {
  // Get the reference string and its comparisons
  const [ref, ...comparisons] = strings;

  // Loop through the string’s characters
  const sameChars = [];
  for (let i = 0; i < ref.length; i += 1) {
    // Loop through the string’s comparisons
    for (let c = 0; c < comparisons.length; c += 1) {
      // Get the current char and its position in the comparison
      const char = ref[i];
      const charPos = comparisons[c].indexOf(char);

      // If the character is duplicate between the reference string
      // and the first comparison string, we add it to the sameChars array
      if (charPos > -1 && c === 0 && !sameChars.includes(ref[i])) {
        sameChars.push(ref[i]);
      }
      // Then, if a character included in the sameChars array
      // doesn’t exist in the other comparison strings, we remove it
      if (charPos === -1 && c > 0 && sameChars.includes(char)) {
        const pos = sameChars.indexOf(char);
        sameChars.splice(pos, 1);
      }
    }
  }
  // The only sameChar left is the duplicate character
  // between all strings
  return sameChars[0];
}

// Return the priority using ASCII pos
function getPriority(char) {
  // We want to start at 26 for uppercase because they value more than lowercase
  const priority = /[A-Z]/.test(char) ? 26 : 0;

  // In ASCII, the lowercase alphabet starts at 97 number
  // but we need 1 so we substract 96
  return priority + (char.toLowerCase().charCodeAt(0) - 96);
}

// Divide an array in groups of 3
function sliceGroups(arr) {
  const groups = [];
  const end = arr.length / 3;

  for (let i = 0; i < end; i += 1) {
    const from = i * 3;
    const to = from + 3;

    groups.push(arr.slice(from, to));
  }

  return groups;
}

module.exports = {
  findSameChar,
  getPriority,
  sliceGroups,
};
