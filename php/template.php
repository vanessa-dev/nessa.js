<?php
function getTemplateEmail($name, $surname, $email, $telephone, $message)
{

  $html = "
    <div style='font-family: Verdana, Arial, Time new Roman;'>
      <h1 style='text-align: center; color: #2740c1;'>Nessa Js - Mensagem do website</h1>
      <table style='border-color: #000000; background-color: #ffffff; float: left;' border='2px' width='100%' cellspacing='0px' cellpadding='16px'>
        <tbody>
          <tr>
            <td style='width: 25%; font-weight: bold;'>Contato:</td>
            <td>$name</td>
          </tr>
          <tr>
            <td style='width: 25%; font-weight: bold;'>E-mail:</td>
            <td>$surname</td>
          </tr>
          <tr>
            <td style='width: 25%; font-weight: bold;'>Telefone:</td>
            <td>$email</td>
          </tr>
          <tr>
            <td style='width: 25%; font-weight: bold;'>Ve&iacute;culo</td>
            <td>$telephone</td>
          </tr>
          <tr>
            <td style='width: 25%; font-weight: bold; height: 150px; vertical-align: top;'>Mensagem:</td>
            <td style='height: 150px; vertical-align: top;'>$message</td>
          </tr>
        </tbody>
      </table>
    </div>
  ";
  return $html;
}