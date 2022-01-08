<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$subject= $_POST['subject'];
$message= $_POST['message'];
$to = "badolaakash4952@mail.com";
$subject = $subject;
$txt ="Name = ". $name . "\r\n Subject=".$subject. "\r\n Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers,$message);
}
//redirect
header("Location:index.html");
?>