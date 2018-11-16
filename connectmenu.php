<?php
  $dsn = "mysql:host=localhost;dbname=cd103g3;port=3306;charset=utf8";
  $user = "BlackWhiteCat";
  $password = "Jay12052";
  $options = array( PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
  $pdo = new PDO($dsn, $user, $password, $options);
?>