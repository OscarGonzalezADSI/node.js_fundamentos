//modulos 
const express = require("express");
const cors = require("cors");
let app = express();

//cargar rutas

//middleware
app.use(cors());




//rutas
app.get('/',(req, res)=>{
    return res.status(200).send({"mensaje" : "hola mundo"});
});
module.exports = app;


