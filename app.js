const express = require('express');
const saludoRoutes = require('./routes/saludoRoutes');
const usersRoutes = require('./routes/usersRoutes');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/saludo", saludoRoutes);

app.use("/users", usersRoutes);

app.use("/user", userRoutes);

app.use("/upload", uploadRoutes);


app.listen( PORT, () => {
    console.log("Server running at port: " + PORT);
});