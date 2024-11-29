const express = require('express')
const router = express.Router()
const controladorAutenticacion = require('../controladores/controladorAutenticacion')

// Rutas de autenticacion

router.post('/registrar', controladorAutenticacion.reqgistrarUsuario)
router.post('/login', controladorAutenticacion.iniciarSesion)

module.exports = router;