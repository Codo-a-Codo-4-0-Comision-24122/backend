const db = require('../db/db');

const getUser = (req, res) => {
    const id = req.params.id; // OJO con este parametro...
    const sql = 'SELECT * FROM users WHERE idUser=' + id;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);        
    });
}

const createUser = (req, res) => {

    const {username, email, gender, age, maidenName,lastName,avatarURL}= req.body;

    const sql = 'INSERT INTO `practica001`.`users` (`username`, `email`, `gender`, `age`, `maidenName`, `lastName`, `avatarURL`) VALUES (?, ?, ?, ?, ?, ?, ?);'
    db.query(sql,[username, email, gender, age, maidenName,lastName,avatarURL] ,(err, result) => {
        if (err) throw err;
        res.send(result);        
    });
}

module.exports = { getUser, createUser };