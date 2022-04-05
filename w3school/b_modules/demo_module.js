const http = require('http');
const modulo = require('./myfirstmodule.js');

http.createServer((req, res) => {
  res.writeHead(200,`hola mundo`);
  res.write(`mis nombres son ${modulo.misNombres('oscar ivan')} y `);
  res.write(`mi apellidos son ${modulo.misApellidos('gonzalez peña')}`);
  res.end();
}).listen(8080);
































/*
const http = require('http');
const modulo = require('./myfirstmodule');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(`hola mundo, mi fecha de cumpleaños es ${modulo.MifechaCumpleanos()}`);
  res.end();
}).listen(8080);
*/