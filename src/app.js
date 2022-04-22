//modulos 
const express = require("express");
const cors    = require("cors");
let   app     = express();

//cargar rutas
const ProductosRoutes = require("./routes/productos.routes");

//middleware
app.use(cors());
app.use(express.json());
app.use("/productos", ProductosRoutes);

//rutas
app.get('/',(req, res)=>{
    return res.status(200).send({"mensaje" : "hola mundo"});
});

module.exports = app;
