<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "erab30@yahoo.es"; // Cambia esta dirección de correo electrónico por la tuya
    $subject = "Nuevo mensaje de contacto de $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    mail($to, $subject, $message, $headers);
    
    // Redireccionar después de enviar el correo
    header("Location: gracias.html"); // Crea una página de agradecimiento (gracias.html)
    exit;
}
?>
