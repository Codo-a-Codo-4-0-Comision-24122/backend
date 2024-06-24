const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

// Obtiene informacion de UN usuario..
router.get("/:id", userController.getUser);

router.post("/create" , userController.createUser );

router.delete("/:id" , userController.deleteUser );

router.put("/:id" , userController.updateUser );

module.exports = router;