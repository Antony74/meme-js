// usage: node serve.js

const fsp = require("fs/promises");
const http = require("http");
const path = require("path");

const port = 8080;
const baseUrl = `http://localhost:${port}/`;

const server = http.createServer(async (req, res) => {
  const url = req.url === "/" ? "/index.html" : req.url;
  const obj = path.parse(url);
  const filename = path.join(__dirname, url);

  try {
    const content = await fsp.readFile(filename, { encoding: "utf-8" });

    if (obj.ext === ".js") {
      res.writeHead(200, { "content-type": "text/javascript" });
    }

    res.end(content);
    console.log(`200 ${url}`);
  } catch (e) {
    const statusCode = e.code === "ENOENT" ? 404 : 500;
    res.writeHead(statusCode).end();
    console.log(`${statusCode} ${url}`);
  }
});

server.listen(port, "localhost", () => {
  console.log(`Server running at ${baseUrl}`);
});
