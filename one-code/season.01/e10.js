const fs = require("fs");
const path = require("path");

module.exports.copyFolder = function copyFolder(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  let targetFolder = path.join();

  let files = fs.readdirSync(source);

  files.forEach((file) => {
    if (fs.lstatSync(path.join(source, file)).isDirectory()) {
      copyFolder(path.join(source, file), path.join(target, file));
    } else {
      copyFile(path.join(source, file), target);
    }
  });
};

function copyFile(source, target) {
  if (fs.lstatSync(source).isFile()) {
    console.log(source, target);
    fs.copyFileSync(source, path.join(target, path.basename(source)));
  }
}
