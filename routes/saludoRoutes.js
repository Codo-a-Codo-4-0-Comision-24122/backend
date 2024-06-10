const express = require('express');
const router = express.Router();
const saludoController = require('../controller/saludoController')

const MiSaludo =  (request, response) => {
    response.send("Hola mundo desde express... con watch desde router desde una funcion..")
};

// basado en los HTTP Methods https://developer.mozilla.org/es/docs/Web/HTTP/Methods
router.get("/", MiSaludo);

module.exports = router;
