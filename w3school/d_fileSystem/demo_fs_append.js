const http = require('http');
const fs = require('fs');
const myfileName = 'mynewfile1.txt';

fs.appendFile(myfileName, 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Savedd!');
});
