const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Obtiene una lista de usuario..
router.get("/list", (request, response) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        response.send(result);        
    });
});


module.exports = router;