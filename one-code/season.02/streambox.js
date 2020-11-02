const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const duplicate = function duplicate(filename) {
  if (filename === "" || !filename || filename === undefined) {
    return console.log("usage: node.js main.js <FILENAME>");
  }
  fs.stat(filename, (err, stat) => {
    if (err) {
      throw err;
    }
    const { name, ext } = path.parse(filename);
    const readable = fs.createReadStream(filename);
    const writeable = fs.createWriteStream(`${name}.copy${ext}`);
    let progress = 0;
    let total = stat.size;
    readable.on("data", (chunk) => {
      progress += chunk.length;
      console.log(`Copying ... ${(100 * progress) / total} %`);
    });
    readable.pipe(writeable);
    writeable.on("finish", () => {
      console.log(`File: ${filename} successfully duplicated !`);
    });
  });
};

const transform = function (textfile, regex, fn, in_stdout = true) {
  const { name, ext } = path.parse(textfile);
  const reader = fs.createReadStream(textfile);

  const upperCase = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().replace(regex, fn));
      callback();
    },
  });

  if (in_stdout) {
    reader.pipe(upperCase).pipe(process.stdout);
  } else {
    const writer = fs.createWriteStream(`${name}.transform${ext}`);
    reader.pipe(upperCase).pipe(writer);
  }
  reader.on("end", () => {
    console.log(`File: ${textfile} successfully transformed !`);
  });
};

const csv2json = function (filename) {
  const { name, ext } = path.parse(filename);
};

module.exports = {
  duplicate,
  transform,
  csv2json,
};
