const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

function empty() {
  myEmitter.on("hi", () => {
    console.log("Hi wolrd!");
  });
  myEmitter.emit("hi");
}

function withArgs(array) {
  myEmitter.on("newFellow", (element) => {
    console.log(`Here come's a new pirate ->> ${element}`);
  });
  array.forEach((element) => {
    myEmitter.emit("newFellow", element);
  });
}

module.exports = {
  empty,
  withArgs,
};
