const mongoose = require("mongoose");

const CarritoShema = new mongoose.Schema ({

    usuarioId: {
        type: String,
        unique: true,
        required: true
    },
    productos: [
        {
            producto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Producto',
            },
            cantidad: {
            type: Number,
            required: true,
            }
        }],
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Carrito', CarritoShema);