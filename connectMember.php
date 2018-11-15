<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=cd103;charset=utf8";
	$user = "root";
	$password = "tshoa";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
	$pdo = new PDO( $dsn, $user, $password, $options);  
?>