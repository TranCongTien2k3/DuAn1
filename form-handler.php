<?php
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];
$email_from ='trancongtiencontact@gmail.com';
$email_subject='New Form Submisstion';
$email_body="User name : $name.\n".
"Subject: $subject.\n". 
"User Message: $message. \n";

$to ='tientc.21it@vku.udn.vn';
$headers= "From : $email_from \r\n";
$headers .="Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
header("Location : contact.html");




?>