const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,ref: 'Categoria', 
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    imagen: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Producto', ProductoSchema);