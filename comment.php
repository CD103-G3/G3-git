<?php
try{
$dsn = "mysql:host=localhost;port=3306;dbname=cd103g3;charset=utf8";
$user = "root";
$password = "tshoa";
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$pdo = new PDO($dsn, $user, $password, $options);

$sql  = "insert into message (member_No, meal_No, message_Content, message_Time) values (:meNo, :mealNo, :meCont, NOW())";

$sentmsg = $pdo->prepare($sql);

// $sentmsg-> bindValue(":msNo",$_REQUEST["messageNo"]);
$sentmsg-> bindValue(":meNo",1);
$sentmsg-> bindValue(":mealNo",$_POST["mealNo"]);
$sentmsg-> bindValue(":meCont",$_POST["msg"]);
$sentmsg->execute();
}
catch(PDOException $e){
    echo"錯誤原因",$e->getMessage(),"<br>";
    echo"錯誤行列",$e->getLine(),"<br>";
}

?>