const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let txt = `${q.year} ${q.month}`;
  res.end(txt);
}).listen(8080);

/*
 *   para probar el codido poner a correr node.js
 *   y visitar la siguiente URL
 *   http://localhost:8080/?year=2017&month=julio
 **/
