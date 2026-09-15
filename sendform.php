<?php 
$phone = trim($_POST['phone']); 
$fromMail = 'message@dom-cub.ru'; 
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'info@dom-cub.ru'; 
$subject = 'Форма обратной связи dom-cub.ru'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 
 
// Содержимое письма 
$body = "Получено письмо с сайта \nТелефон: $phone"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

 
?>