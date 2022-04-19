//modulos 
const express = require("express");
const cors    = require("cors");
let   app     = express();

//cargar rutas
const ProductosRoutes = require("./routes/productos.routes");

//middleware
app.use(cors());

//rutas
app.get('/',(req, res)=>{
    return res.status(200).send({"mensaje" : "hola mundo"});
});

app.use("/productos", ProductosRoutes);

module.exports = app;
