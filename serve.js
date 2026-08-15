// usage: node serve.js

const fsp = require("fs/promises");
const http = require("http");
const path = require("path");
const urlLib = require("url");

const port = 8080;
const baseUrl = `http://localhost:${port}/`;

const server = http.createServer(async (req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const obj = path.parse(url);
  const filename = path.join(__dirname, url);

  try {
    const content = await fsp.readFile(filename);

    switch (obj.ext) {
      case ".js":
      case ".mjs":
        res.writeHead(200, { "content-type": "text/javascript" });
        break;
      case ".jpg":
        res.writeHead(200, { "content-type": "image/jpeg" });
        break;
    }

    res.end(content);
    console.log(`200 ${url}`);
  } catch (error) {
    const statusCode = error.code === "ENOENT" ? 404 : 500;
    res.writeHead(statusCode).end();
    console.log(`${statusCode} ${url}`);
  }
});

server.listen(port, "localhost", () => {
  console.log(`Server running at ${baseUrl}`);
});
