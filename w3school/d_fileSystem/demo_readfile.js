//crear archivos
/*
    El fs.appendFile() método agrega contenido especificado a un archivo.
    Si el archivo no existe, se creará el archivo
*/
const fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//lectura archivos
const http = require('http');
//const fs = require('fs'); //esta linea se comento porque la variable ya esta declarada en la linea 6
http.createServer((req, res) => {
fs.readFile('demofile1.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
}).listen(8080);
