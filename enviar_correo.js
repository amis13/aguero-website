const nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.SENDER,
        pass: process.env.PASSWORD
    }
});


function enviarCorreo(nombre, email, mensaje) {
    const mailOptions = {
        from: process.env.SENDER,
        to: process.env.RECIVER,
        subject: 'Nuevo mensaje de contacto de ' + nombre,
        text: `Nombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
}

module.exports = enviarCorreo;
