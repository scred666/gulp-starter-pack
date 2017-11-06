<? 
if (array_key_exists('name', $_POST)) { 
$to = 'P.Dubovsky@prestigio.eu, T.Rabtsava@prestigio.eu'; 
$subject = 'Заполнена форма записи с '.$_SERVER['HTTP_REFERER']; 
$subject = "=?utf-8?b?". base64_encode($subject) ."?="; 
$message = "Имя: ".$_POST['name']."\nE-mail: ".$_POST['email']."\nТелефон: ".$_POST['phone']."\nСообщение: ".$_POST['msg']."\nIP: ".$_SERVER['REMOTE_ADDR']; 
$headers = 'Content-type: text/plain; charset="utf-8"'; 
$headers .= "MIME-Version: 1.0\r\n"; 
$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n"; 
mail($to, $subject, $message, $headers); 
echo $_POST['name']; 
} 
?>