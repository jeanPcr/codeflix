const streamBox = require("./streambox");
const eventbox = require("./eventbox");
const myEventEmiter = require("./episode_final");
const file = process.argv[2];

if (file === "" || file === undefined) {
  return console.log("usage : node main.js <FILENAME>");
}

const names = ["Luffy", "Zoro", "Usopp", "Robin", "Nami", "Sanji", "Ch0pper"];

/** EVENTBOX **/
//eventbox.empty();
//eventbox.withArgs(names);

/** STREAMBOX **/
//streamBox.duplicate(file);
// streamBox.transform(
//   file,
//   /[a-z]/gm,
//   (pattern) => {
//     return pattern.toUpperCase();
//   },
//   false
// );
// streamBox.csv2json(file);

/** ENT EMITTER **/

const m = new myEventEmiter();

m.on("hi", (data) => {
  console.log(`event::hi [args == ${data.length}]`);
  for (const [idx, d] of data.entries()) {
    console.log(`${idx}: ${d}`);
  }
});

m.emit("hi", "hello", "world");
