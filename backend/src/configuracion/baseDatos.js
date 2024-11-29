const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const conectarBD = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conectado a MongoDB...')
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error)
        process.exit(1)
    }
}

module.exports = conectarBD