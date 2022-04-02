const http = require('http');
const modulo = require('./myfirstmodule');

http.createServer((req, respuesta) => {
  respuesta.writeHead(200, {'Content-Type': 'text/html'});
  respuesta.write("The date and time is currently: " + modulo.myDateTime());
  respuesta.end();
}).listen(8080);
