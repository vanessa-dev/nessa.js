<?php
// Load Composer's autoloader
require_once "lib/PHPMailer/autoload.php";
require "template.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// DEFINE O FUSO HORARIO COMO O HORARIO DE BRASILIA
date_default_timezone_set('America/Sao_Paulo');

$retorno = array();
$name = isset($_POST["name"]) ? $_POST["name"] : "Não identificado";
$surname = isset($_POST["surname"]) ? $_POST["surname"] : "Não identificado";
$telephone = isset($_POST["telephone"]) ? $_POST["telephone"] : "Não identificado";
$email = isset($_POST["email"]) ? $_POST["email"] : "Não identificado";
$message = isset($_POST["message"]) ? $_POST["message"] : "Não identificado";
$template = getTemplateEmail($name,$surname, $telephone, $email, $message);
$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                            
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'username';                  
    $mail->Password   = 'senha';                     

    $mail->Host       = 'smtp.gmail.com';  
    $mail->SMTPSecure = 'STARTTLS';                                
    $mail->Port       = 587;                                   
    $mail->setFrom('origem', 'WEB SITE - Nessa.js'); 
    $mail->addAddress('destino');    
    $mail->isHTML(true);                                  
    $mail->Subject = "Mensagem de contato do site Nessa.js.";
    $mail->Body    = $template;
    $mail->AltBody = "teste";

    $mail->send();
    $retorno = array("success" => "Recebemos sua mensagem, retornaremos o mais breve possível.");
} catch (Exception $e) {
    $retorno = array("error" => "Ocorreu um erro, causa: {$mail->ErrorInfo}");
}
?>