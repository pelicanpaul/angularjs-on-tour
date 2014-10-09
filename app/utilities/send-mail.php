
<?php
 foreach($_POST as $key =>$value){
     // do something using key and value
     //echo($key);
     //echo("");
     //echo($value);
     //echo("");
 }

 $to = "thepaullyons@gmail.com";
  $subject = "Message from ON-TOUR Website";
  $body = $_POST["message"];;
  if (mail($to, $subject, $body)) {
    echo("Email successfully sent!");
   } else {
    echo("Email delivery failed");
   }

$pabloe = "Paul Lyons";



 ?>