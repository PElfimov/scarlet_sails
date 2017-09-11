
<?php
echo "Привет, меня зовут Иван" ;
print_r(array_values($_POST));
$fio = $_POST['user'];
$email = $_POST['phone'];
$checkbox = $_POST['personal-data'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);

$fio = urldecode($fio);
$email = urldecode($email);

$fio = trim($fio);
$email = trim($email);

echo $fio;
echo "<br>";
echo $email;

if (mail("info@t-kartika.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";}
?>
