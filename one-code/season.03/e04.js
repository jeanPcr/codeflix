const http = require("http");
const { URL } = require("url");
let PORT = process.argv[2] ? process.argv[2] : 4242;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let count = 0;
  let params = [];
  url.searchParams.forEach((value, key) => {
    count++;
    params.push(`${key} : ${value} `);
  });
  if (count > 0) {
    res.write(`My request dump: \n${req.method} ${req.url} \n`);
    res.write(`There are ${count} parameters\n`);
    params.forEach((param) => {
      res.write(`${param} \n`);
    });
  }
  res.end("done");
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
