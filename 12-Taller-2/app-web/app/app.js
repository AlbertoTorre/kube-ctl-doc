const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Credenciales desde variables de entorno
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

app.get('/', (req, res) => {
    res.send(`<h1>Prueba conexión DB</h1><button onclick="location.href='/test'">Probar conexión</button>`);
});

app.get('/test', (req, res) => {
    const connection = mysql.createConnection({
        host: 'mysql',
        user: dbUser,
        password: dbPassword
    });
    connection.connect((err) => {
        if (err) {
            res.send(`<p> Error conectando a la base de datos: ${err.message}</p>`);
        } else {
            res.send('<p> Conexión exitosa a la base de datos</p>');
        }
        connection.end();
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`App web escuchando en http://0.0.0.0:${PORT}`);
});