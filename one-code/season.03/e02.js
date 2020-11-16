const http = require("http");
const PORT = parseInt(process.argv[2]);
if (PORT === undefined || PORT === "") {
  return console.log("usage:  node e01.js <PORT>");
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("<h1>Hello Wolrd!</h1>");
  } else if (req.method === "POST") {
    res.end("Heisenberg");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
