const res = require("express/lib/response");

const ProductosController = {
    index : (req, res) => {
        return res.status(200).send({"mensaje" : "respuesta del controlador"});
    },
    saludo : (req, res)=>{
        return res.status(200).send({"mensaje" : "hola Carlos."});
    },
    despedida : (req, res) => {
        return res.status(200).send({"mensaje" : "hasta pronto Carlos."});
    }
}

module.exports = ProductosController;
