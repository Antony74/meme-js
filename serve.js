// usage: node serve.js

const fsp = require("fs/promises");
const http = require("http");
const path = require("path");
const urlLib = require("url");

const port = 8080;
const baseUrl = `http://localhost:${port}/`;

const ensureExists = async (url, filename) => {
  const parsedUrl = new urlLib.URL(url);
  const parsedPathname = path.parse(parsedUrl.pathname);
  filename = filename ?? `${parsedPathname.name}${parsedPathname.ext}`;
  try {
    await fsp.lstat(filename);
    console.log(`found ${filename}`);
    return;
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  console.log(`fetching ${url}`);
  const response = await fetch(url);

  if (response.status >= 400) {
    throw new Error(`Status ${response.status}`);
  }

  const text = await response.text();
  await fsp.writeFile(filename, text);
};

const main = async () => {
  await ensureExists("https://cdn.jsdelivr.net/npm/p5@2.3.2/lib/p5.min.js");

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
};

main();
