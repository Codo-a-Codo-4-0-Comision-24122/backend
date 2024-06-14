const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

// Obtiene informacion de UN usuario..
router.get("/:id", userController.getUser);

router.post("/create" , userController.createUser );

module.exports = router;