const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio.']
    },
    value: {
        type: Number,
        required: [true, 'El valor del producto es obligatorio.'],
        unique: true
    }
});

module.exports = model( 'Producto', ProductSchema );
