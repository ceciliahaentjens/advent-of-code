function isInstruction(str) {
  return str.startsWith("$");
}

function isFile(str) {
  return /^\d/.test(str);
}

function getFolders(lines) {
  let path = "";
  const folders = [];
  let currentCommand = null;

  lines.forEach((line) => {
    if (isInstruction(line)) {
      const [$, cmd, arg] = line.split(" ");

      // Add the current cmd (cd or ls)
      currentCommand = cmd;

      // If we want to move from a folder to another
      if (currentCommand === "cd") {
        switch (arg) {
          // If it’s the root folder
          case "/":
            // Add the root to the folders array
            folders.push({
              name: arg,
              path: "/",
              size: 0,
            });
            break;
          // If we are moving backward
          case "..":
            // Remove the last part of the path
            path = path.slice(0, path.lastIndexOf("/"));
            break;
          // If we are moving forward to a folder
          default:
            // Increment path
            path += `/${arg}`;

            // Add the folder to the folders array
            folders.push({
              name: arg,
              path,
              size: 0,
            });
        }
      }
    } else if (currentCommand === "ls") {
      if (isFile(line)) {
        const [size, name] = line.split(" ");

        for (let i = 0; i < folders.length; i += 1) {
          const directory = folders[i];
          if (path.includes(directory.name) && path.includes(directory.path)) {
            directory.size += parseInt(size, 10);
          }
        }
      }
    } else {
      throw new Error("unkown state");
    }
  });

  return folders;
}

module.exports = {
  isInstruction,
  isFile,
  getFolders,
};
