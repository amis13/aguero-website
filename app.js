const express = require('express');
const bodyParser = require('body-parser');
const enviarCorreo = require('./enviar_correo'); // Asegúrate de ajustar la ruta al archivo enviar_correo.js

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el archivo HTML desde la raíz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para procesar el formulario
app.post('/enviar-formulario', (req, res) => {
    const { name, email, message } = req.body;

    // Llama a la función enviarCorreo para enviar el correo
    enviarCorreo(name, email, message);

    // Redirige a una página de agradecimiento
    res.redirect('/gracias.html'); // Asegúrate de que gracias.html esté en la raíz
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
