<?php
    try{
        require_once('phpDB/connectDB_CD103G3.php');

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