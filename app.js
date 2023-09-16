const express = require('express');
const bodyParser = require('body-parser');
const enviarCorreo = require('./enviar_correo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir archivos HTML y procesar el formulario
app.use(express.static('index.html'));

// Ruta para procesar el formulario
app.post('/enviar-formulario', (req, res) => {
    const { name, email, message } = req.body;

    // Llama a la función enviarCorreo para enviar el correo
    enviarCorreo(name, email, message);

    // Redirige a una página de agradecimiento
    res.redirect('/gracias.html'); // Crea una página de agradecimiento (gracias.html)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
