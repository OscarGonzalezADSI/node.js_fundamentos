const { Schema, model } = require('mongoose');

const FacturasSchema = Schema({
    usuarioId: {
        type: String,
        required: [true, 'El correo es obligatorio.']
    },
    productos: {
        type: String,
        required: [true, 'El correo es obligatorio.'],
        unique: true
    }
});

module.exports = model( 'Factura', FacturaSchema );
