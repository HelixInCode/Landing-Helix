<?php

$nombre = $_REQUEST['nombre'];
$telefono = $_REQUEST['telefono'];
$email = $_REQUEST['correo'];
$asunto = $_REQUEST['asunto'];
$mensaje1 = $_REQUEST['mensaje'];

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = '6Le_BtcZAAAAAFtYt72Shr4Hq_xihd3_74BZltul';
$recaptcha_response = $_POST['recaptcha_response'];
$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha);

if ($recaptcha->score >= 0.8) {
    $header = 'From: ' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Nombre de Cliente: " . $nombre . ",\r\n";
    $mensaje .= "Telefono: " . $telefono . ",\r\n";
    $mensaje .= "Mensaje: " . $mensaje1 . ",\r\n";

    $mensaje .= "Enviado el " . date('d/m/Y', time());

    $para = 'helixincode@gmail.com';
    $asunto = 'Mensaje enviado desde la página Helix';

    $envio = mail($para, $asunto, utf8_decode($mensaje), $header);

    header("Location:../index.html");

    if ($envio) {
        echo json_encode("si se envio");
    } else {
        echo json_encode("Error al enviar el mail");
    }
} else {
    // KO. ERES ROBOT, EJECUTA ESTE CÓDIGO
}
