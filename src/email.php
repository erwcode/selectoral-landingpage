<?php
  header("Content-Type:text/html; charset=UTF-8");
  $para = 'contacto@selectoral.com';
  $titulo = '🧲 Nuevo Lead Sistema de Gestión Electoral';

  $cabeceras = 'MIME-Version: 1.0' . "\r\n";
  $cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $cabeceras .= 'From: '.$_POST["userEmail"];


  $mensaje =
      '<html>'.
          '<head>
              <title>Formulario de Acceso al Sistema</title>
          </head>'.
          '<body>
            <p>👋 ¡Hola!</p>
            <p>Mi nombre es <strong>'.$_POST["userName"].'</strong> <strong>'.$_POST["userLastName"].'</strong>.</p>'.
            '<p>¡Estoy interesado/a en el Sistema de Gestión Electoral!</p>'.
            '<p>📧 Email: <strong>'.$_POST["userEmail"].'</strong></p>'.
            '<p>Quedo en espera de su información, gracias.</p>'.
        '</body>'.
      '</html>';


  if (mail($para, $titulo, $mensaje, $cabeceras)){
      echo json_encode("Correo enviado, muchas gracias por contactarnos.");
  }else{
      echo json_encode('Falló el envio');
  }
?>
