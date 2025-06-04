const http = require("http");

const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader("Content-Type", "text/html");

  // Write response content
  res.write("<html><head><title>NodeJS HTTP Server</title></head></html><body>");
  res.write("<h1>Hello World!!!!!!</h1>");
  res.write("</body></html>");

  // End the response
  res.end();
});

const host = "localhost";
const port = 3000;

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
