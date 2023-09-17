const express = require('express');
const bodyParser = require('body-parser');
const enviarCorreo = require('./enviar_correo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/enviar-formulario', (req, res) => {
    const { name, email, message } = req.body;

    enviarCorreo(name, email, message);

    res.redirect('/gracias.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
