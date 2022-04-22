const res = require("express/lib/response");
const productosSchema = require("../models/producto.models");

const ProductosController = {
    // obtener todos los productos
    index : (req, res) => {
        productosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
    },
    // obtener un producto por el id
    producto : (req, res) => {
        const { id } = req.params;
        productosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
    },
    // crear un producto
    create : (req, res) => {
        const producto = productosSchema(req.body);
        producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
    },
    // actualizar un producto por el id
    update : (req, res) => {
        const { id } = req.params;
        const { name, value } = req.body;
        productosSchema
        .updateOne({ _id : id }, { $set : { name, value } })
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
    },
    // eliminar un usuario por el id
    delete : (req, res) => {
        const { id } = req.params;
        productosSchema
        .remove({ _id : id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message : error}));
    }
}

module.exports = ProductosController;
