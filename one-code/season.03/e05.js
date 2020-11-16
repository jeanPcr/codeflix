const http = require("http");
let PORT = process.argv[2] ? process.argv[2] : 4242;

const server = http.createServer((req, res) => {
  if (req.headers["user-agent"].startsWith("curl")) {
    res.write(`My request headers dump:  \n`);
    res.write(`host: ${req.headers.host}  \n`);
    res.write(`user-agent: ${req.headers["user-agent"]}  \n`);
    res.write(`accept: ${req.headers.accept}  \n`);
  }

  res.end("done");
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
