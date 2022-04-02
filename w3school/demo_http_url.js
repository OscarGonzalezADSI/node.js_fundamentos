/*
 *  Este objeto tiene una propiedad llamada "url"
 *  que contiene la parte de la url que viene
 *  después del nombre de dominio:
 **/

const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

/*
 *   para probar el codido poner a correr node.js
 *   y visitar la siguiente URL
 *   http://localhost:8080/invierno
 **/
