<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTP_REFERER'] === "http://localhost:3000/"){
    // extract the data from $_POST
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null;

    if($email && $phone){

        //Load composer's autoloader
        require './vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.mail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'juleybib.ashab@mail.ru';           // SMTP username
            $mail->Password   = 'Allahakbar9520';                        // SMTP password
            $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 465;

            // Recipients
            $mail->setFrom('juleybib.ashab@mail.ru', 'React Contact form');
            $mail->addAddress($email);     // Add a recipient
            $mail->addReplyTo('juleybib.ashab@mail.ru', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'React Contact form';
            $mail->Body    = 'Email: ' . $email . '<br />Номер телефона: ' . $phone;

            if($mail->send())
                echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>