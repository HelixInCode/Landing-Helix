<?php

$nombre = $_REQUEST['nombre'];
$telefono = $_REQUEST['telefono'];
$email = $_REQUEST['correo'];
$asunto = $_REQUEST['asunto'];
$mensaje1 = $_REQUEST['mensaje'];




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

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:../index.html");
?>

