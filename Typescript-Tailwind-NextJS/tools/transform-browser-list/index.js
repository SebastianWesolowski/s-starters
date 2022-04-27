const fs = require("fs");

module.exports = (pathFile) => {
  const arrayLine = [];
  const allFileContents = fs.readFileSync(pathFile, "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    arrayLine.push(line);
  });

  return arrayLine;
};
