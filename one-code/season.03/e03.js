const fs = require("fs");
const http = require("http");
let PORT = process.argv[2] ? process.argv[2] : 4242;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
