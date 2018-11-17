<?php
require_once 'functions.php';


$check = del_coll($_POST['id']);

if($check)
{
	echo 'yes';
}else{
	echo 'no';	
}

?>