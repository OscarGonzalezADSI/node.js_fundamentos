const res = require("express/lib/response");

const ProductosController = {
    index : (req, res) => {
        return res.status(200).send({"message" : "respuesta del controlador"});
    },
    saludo : (req, res) => {
        return res.status(200).send({"message" : "hola Carlos."});
    },
    despedida : (req, res) => {
        return res.status(200).send({"message" : "hasta pronto Carlos."});
    },
    create : (req, res) => {
        return res.status(200).send({"message" : "registrar producto."});
    },
    update : (req, res) => {
        return res.status(200).send({"message" : "modificar producto."});
    },
    delete : (req, res) => {
        return res.status(200).send({"message" : "eliminar producto."});
    }
}

module.exports = ProductosController;
