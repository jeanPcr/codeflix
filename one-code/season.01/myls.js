const child_process = require("child_process");
function myls(str) {
  child_process.exec("ls", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`Output: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}
myls();
