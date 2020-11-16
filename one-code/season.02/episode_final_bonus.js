const fs = require("fs");
const path = require("path");

const catPipeWc = function (dir, type, cb) {
  const jsFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".js");
  fs.readFile(jsFiles[0], (err) => {
    if (err) {
      throw err;
    }
  });
};

module.exports = {
  catPipeWc,
};
