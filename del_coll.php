<?php
$dbhost = 'localhost';
$dbuser = 'BlackWhiteCat';
$dbpasswd = 'Jay12052';
$dbname = 'cd103g3';
$dsn = "mysql:host=".$dbhost.";dbname=".$dbname;
 
try
{
    $conn = new PDO($dsn,$dbuser,$dbpasswd);
    $conn->exec("SET CHARACTER SET utf8");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "連結資料庫成功";
}
catch(PDOException $e)
{
    echo "Connection failed: ".$e->getMessage();
}


$sql = "DELETE FROM `membercoll` WHERE `meal_No` = :meal_No";
$sth = $conn->prepare($sql);



?>