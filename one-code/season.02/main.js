const streamBox = require("./streambox");
const eventbox = require("./eventbox");
const file = process.argv[2];

const names = ["Luffy", "Zoro", "Usopp", "Robin", "Nami", "Sanji", "Ch0pper"];

/*EVENTBOX */
//eventbox.empty();
//eventbox.withArgs(names);

/*STREAMBOX*/
//streamBox.duplicate(file);
// streamBox.transform(
//   file,
//   /[a-z]/gm,
//   (pattern) => {
//     return pattern.toUpperCase();
//   },
//   false
// );
streamBox.csv2json(file);
