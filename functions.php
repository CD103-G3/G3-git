<?php
@session_status();


function del_coll(id){
	$result = null;

	$delsql = "DELETE FROM `membercoll`
			WHERE `id` = $id";


	$query = mysqli_query($_SESSION['link'],$delsql);

	if($query)
	{
		if(mysqli_membercoll_rows($_SESSION['link']) ==1)
		{
			$result = ture;
		}
	}else{

		echo "失敗"
	}
	return $result; 
}






?>