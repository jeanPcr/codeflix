const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");
const readline = require("readline");

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
  if (ext !== ".csv") return console.log("You have to pass a CSV file.");

  const reader = fs.createReadStream(filename);
  const writer = fs.createWriteStream(`${name}.json`);
  const rl = readline.createInterface({ input: reader });
  let anArray = [];
  let headers = [];
  let values = [];
  let lineNbr = 0;

  rl.on("line", (line) => {
    if (lineNbr === 0) {
      headers = line.split(";");
    } else {
      values.push(line.split(";"));
    }
    lineNbr++;
  });

  rl.on("close", () => {
    values.forEach((value) => {
      let obj = {};
      headers.forEach((header, j) => {
        if (value !== undefined && value.toString() !== "") {
          if (value[j].includes(",")) {
            obj[header] = value[j].split(",");
          } else {
            obj[header] = value[j];
          }
        }
      });
      anArray.push(obj);
    });

    writer.write(JSON.stringify(anArray, null, 1), (err) => {
      if (err) {
        console.log(err);
      } else console.log(`File: ${name}.json successfully created !`);
    });
  });
};

module.exports = {
  duplicate,
  transform,
  csv2json,
};
