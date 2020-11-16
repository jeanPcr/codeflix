const http = require("http");
const { URL } = require("url");
const fs = require("fs");
const path = require("path");
const PORT = process.argv[2] ? process.argv[2] : 4242;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.searchParams.has("mime")) {
    switch (url.searchParams.get("mime")) {
      case "mp3":
        let mp3filePath = path.join(__dirname, "mime.mp3");
        let mp3stat = fs.statSync(mp3filePath);
        res.writeHead(200, {
          "Content-Type": "audio/mp3",
          "Content-Length": mp3stat.size,
        });
        let mp3readStream = fs.createReadStream(mp3filePath);
        mp3readStream.pipe(res);

        break;
      case "mp4":
        let filePath = path.join(__dirname, "mime.mp4");
        let stat = fs.statSync(filePath);
        res.writeHead(200, {
          "Content-Type": "video/mp4",
          "Content-Length": stat.size,
        });
        let readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
        break;
      default:
        res.end("Enter a specific content type file as mime parameters.");
        break;
    }
  } else {
    res.end(
      "I woke up, I found the server without parameters, that's I kwnow."
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
