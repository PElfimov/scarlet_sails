
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
$emailAddress="info@t-kartika.ru";

echo $fio;
echo "<br>";
echo $email;

include "libmail.php"; //Класс для работы с мейлом через smtp SSL/TSL
$m= new Mail("utf-8"); // начинаем
$m->From( " Server Notification;pelfimov@yandex.ru" ); // от кого отправляется почта
$m->To( $emailAddress ); // кому адресованно
$m->Subject( "Registration" );
$m->Body( "Вы зарегистрировались. Ваш пароль:");
$m->Priority(3);// приоритет письма
$m->smtp_on("ssl://smtp.yandex.ru","pelfimov","24m7#4be", 465);
$m->Send();    // а теперь пошла отправка


?>
