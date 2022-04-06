/*
 * El metodo fs.appendFile()
 * agrega contenido especificado a un archivo.
 * Si el archivo no existe, se creará el archivo.
 **/

const http = require('http');
const fs = require('fs');

//crear archivos
fs.appendFile('mynewfile1.txt', 'Hello content!\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//lectura archivos
http.createServer((req, res) => {
    fs.readFile('demofile1.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
