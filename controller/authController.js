const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../db/userDataModel');
// seguramente configar opciones...
const config = require('../config/config');


const register =  (request, response) => {

    const { username, password } = request.body;
    // a partir de aca oculto la contraseña...
    const passwordHashed = bcrypt.hashSync(password, 'estoesunsalt');

    const userRegistration = { id: users.length + 1, username, password: passwordHashed };
    users.push(userRegistration);

    // generamos un token con identificaion unica...
    const token = jwt.sign( { id: userRegistration.id }, config.secretKey, { expiresIn: config.expiresIn}  );

    response.status(200).send( { auth:true, token});
};

module.exports = { register };
