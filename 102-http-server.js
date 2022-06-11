`use strict`;
const http = require(`http`);

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Server created correctly</h1>`);
};

http.createServer(requestHandler).listen(3000);

console.log(`Server is runnig`);
