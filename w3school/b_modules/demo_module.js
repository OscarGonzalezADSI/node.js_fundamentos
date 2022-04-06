const http = require('http');
const modulo = require('./myfirstmodule.js');

http.createServer((req, res) => {
  res.writeHead(200,`hola mundo`);
  res.write(`mis nombres son ${modulo.misNombres('oscar ivan')} y `);
  res.write(`mi apellidos son ${modulo.misApellidos('gonzalez peña')}`);
  res.end();
}).listen(8080);
