<?php
    // $reportQty = $_REQUEST["report_Qty"];
    $messageNo = $_REQUEST["message_No"];

    try{
        require_once('phpDB/connectDB_CD103G3.php');

        // $sql = "update messagereport set report_Qty = :report_Qty where message_No=$messageNo";
        $sql = "UPDATE `message` set `message_Reported` = 1 WHERE `message_No` = '$messageNo'"; //更新該留言資料為被檢舉

        $sentmsgreport = $pdo->prepare($sql);

        // $sentmsgreport->bindValue(":report_Qty", $reportQty+1);
        $sentmsgreport->execute();

        //寫入被檢舉留言的資料庫
        $sql = "INSERT INTO `messagereport` (`report_No`, `message_No`, `report_Date`, `report_Qty`, `report_Status`) VALUES (NULL, $messageNo, NOW(), '1', 'not');";
        $sentmsgreport = $pdo->prepare($sql);
        $sentmsgreport->execute();

    }
    catch(PDOException $e){
        echo"錯誤原因",$e->getMessage(),"<br>";
        echo"錯誤行列",$e->getLine(),"<br>";
    };
?>