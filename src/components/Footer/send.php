<?php
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $message = "Email пользователя: $email\r\nНомер пользователя: $phone";

    // if (isset($_POST['text'])){
    //     $sub_text = "Заявка на курс с сайта Expovision";
    //     $message .= "Сообщение: " . $text;
    // }

//      if (isset($_POST['checkbox'])){
//         $checkbox = $_POST['checkbox'];
//         $check_mess .= "Формат: " . $checkbox;
//     }

$headers .= "Reply-To: reply-to@example.com\r\n";

    $subject = "=?utf-8?B?".base64_encode($sub_text)."?=";

    $success = mail("alikshangazamatov@gmail.com", $message, $headers);

    echo $success;
?>