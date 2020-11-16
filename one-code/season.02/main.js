const streamBox = require("./streambox");
const eventbox = require("./eventbox");
const myEventEmiter = require("./episode_final");
const { catPipeWc } = require("./episode_final_bonus");
const { count } = require("console");

const names = ["Luffy", "Zoro", "Usopp", "Robin", "Nami", "Sanji", "Ch0pper"];

/** EVENTBOX **/
//eventbox.empty();
//eventbox.withArgs(names);

/** STREAMBOX **/
// const file = process.argv[2];
//  if (file === undefined) {
//   return console.log("usage : node main.js <FILENAME>");
//  }
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

// const m = new myEventEmiter();

// m.on("hi", (data) => {
//   console.log(`event::hi [args == ${data.length}]`);
//   for (const [idx, d] of data.entries()) {
//     console.log(`${idx}: ${d}`);
//   }
// });
// m.emit("hi", "hello", "world");

/** CAT PIPE WC **/
const dir = process.argv[2];
const type = process.argv[3];
if (dir === undefined || type === undefined) {
  return console.log("usage : node main.js <DIRECTORY> <FILE TYPE>");
}
catPipeWc(dir, type, (text) => {});
