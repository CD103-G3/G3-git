<?php
	require_once('nav.php');
	ob_start();
	session_start();
	$memNo = 2; //測試用
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
	  		integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
	  		crossorigin="anonymous"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" >
	<link rel="stylesheet" href="css/style.css">
		
</head>
<body>
	
	
	

	<section>
		<div class="coll_slogan part-12 part-s-12">
			<div class="coll_slogan_title part-12">
				<p id="coll_slogan_txt" style="">我的收藏</p>
				
			</div>
			<!-- <div class="coll_slogan_pic part-9 ">
				<img src="image/鍋2.jpg" alt="" class="coll_slogan_pic_icon move">
			</div> -->
			<!-- <div class="coll_slogan_title part-3">
				<p class="coll_slogan_left ">自由收藏你的菜色</p>
				<p class="coll_slogan_right ">記錄你選擇的佳餚</p>
			</div> -->
		</div>
		
	</section>
	

	<section>
		<div class="coll_panel part-3">
			<!-- 橘色 -->
			<div class="coll_total_background">
				<div class="coll_total part-12 part-s-6 part-l-6">
				
					<?php
						try{
							require_once("connectmenu.php");
						      
							$collsql = "select Count(distinct membercoll.meal_No) counts from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No && membercoll.member_No = $memNo";
							$colltotal = $pdo->prepare($collsql);
							$colltotal->execute();
							while($rowcoll=$colltotal->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_total_num"><?php echo $rowcoll['counts']?></p>

					<?php
							}
						?>		
						<?php
							}catch(PDOException $e){
								echo $e->getMessage();
							}
						?>

					<p class="coll_total_title">已收藏菜色總數</p>
				</div>
				<div class="coll_total_s part-12 part-s-6 part-l-6">
					<p>已收藏菜色總數</p>
				</div>
			</div>	
			<!-- 橘色結束 -->
			


			
			<!-- 紅色 -->
			<div class="coll_kind  part-s-12 part-l-12">
				
				<div class="coll_kind_item part-4 part-s-2 part-l-2">
					<a href="#A1"><img src="image/bandon.png" alt="convenient" title="便當" class="kind_icon"></a>
					<p class="coll_kind_item_title">便當</p>

					<?php
						try{
							require_once("connectmenu.php");
								
							$collsql = "select Count(distinct membercoll.meal_No) counts from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No = :n && membercoll.member_No = $memNo";
							$colltotal = $pdo->prepare($collsql);
							$colltotal->bindValue(":n",1);
							$colltotal->execute();
							while($rowcoll=$colltotal->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_kind_item_text"><?php echo $rowcoll['counts']?></p>

					<?php
						}
					?>		
					<?php
						}catch(PDOException $e){
							echo $e->getMessage();
						}
					?>

				</div>
				<div class="coll_kind_item part-4 part-s-2 part-l-2">
					<a href="#A2"><img src="image/don.png" alt="Risotto" title="丼飯" class="kind_icon"></a>
					<p class="coll_kind_item_title">丼飯</p>

					<?php
						try{
							require_once("connectmenu.php");
								
							$collsql = "select Count(distinct membercoll.meal_No) counts from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No = :n && membercoll.member_No = $memNo";
							$colltotal = $pdo->prepare($collsql);
							$colltotal->bindValue(":n",0);
							$colltotal->execute();
							while($rowcoll=$colltotal->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_kind_item_text"><?php echo $rowcoll['counts']?></p>

					<?php
						}
					?>		
					<?php
						}catch(PDOException $e){
							echo $e->getMessage();
						}
					?>

				</div>
				<div class="coll_kind_item part-4 part-s-2 part-l-2">
					<a href="#A3"><img src="image/lame.png" alt="noodles" title="拉麵" class="kind_icon"></a>
					<p class="coll_kind_item_title">拉麵</p>

					<?php
						try{
							require_once("connectmenu.php");
								
							$collsql = "select Count(distinct membercoll.meal_No) counts from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No = :n && membercoll.member_No = $memNo";
							$colltotal = $pdo->prepare($collsql);
							$colltotal->bindValue(":n",2);
							$colltotal->execute();
							while($rowcoll=$colltotal->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_kind_item_text"><?php echo $rowcoll['counts']?></p>

					<?php
						}
					?>		
					<?php
						}catch(PDOException $e){
							echo $e->getMessage();
						}
					?>

				</div>
				<div class="coll_kind_item part-4 part-s-2 part-l-2">
					<a href="#A4"><img src="image/denshyoku.png" alt="Diet" title="定食" class="kind_icon kind_icon_denshyoku"></a>
					<p class="coll_kind_item_title">定食</p>

					<?php
						try{
							require_once("connectmenu.php");
								
							$collsql = "select Count(distinct membercoll.meal_No) counts from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No = :n && membercoll.member_No = $memNo";
							$colltotal = $pdo->prepare($collsql);
							$colltotal->bindValue(":n",3);
							$colltotal->execute();
							while($rowcoll=$colltotal->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_kind_item_text"><?php echo $rowcoll['counts']?></p>

					<?php
						}
					?>		
					<?php
						}catch(PDOException $e){
							echo $e->getMessage();
						}
					?>

				</div>
				<div class="coll_kind_item part-4 part-s-2 part-l-2">
					<a href="#A5"><img src="image/veget.png" alt="vegetarian" title="素食" class="kind_icon kind_icon_vegetarian"></a>
					<p class="coll_kind_item_title">素食</p>

					<?php
						try{
							require_once("connectmenu.php");
								
							$collsql = "select Count(distinct membercoll.meal_No) counts from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No = :n && membercoll.member_No = $memNo";
							$colltotal = $pdo->prepare($collsql);
							$colltotal->bindValue(":n",4);
							$colltotal->execute();
							while($rowcoll=$colltotal->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_kind_item_text"><?php echo $rowcoll['counts']?></p>

					<?php
						}
					?>		
					<?php
						}catch(PDOException $e){
							echo $e->getMessage();
						}
					?>

				</div>
				<div class="coll_kind_item part-4 part-s-2 part-l-2 ">
					<a href="#A6"><img src="image/soup.png" alt="hot_pot" title="鍋物" class="kind_icon"></a>
					<p class="coll_kind_item_title">鍋物</p>

					<?php
						try{
							require_once("connectmenu.php");
								
							$collsql = "select Count(distinct membercoll.meal_No) count from membercoll,meal where membercoll.meal_No = meal.meal_No && meal.mealGenre_No = :n && membercoll.member_No = $memNo";
							$colltotalsoup = $pdo->prepare($collsql);
							$colltotalsoup->bindValue(":n", 5);
							$colltotalsoup->execute();
							while($rowcoll=$colltotalsoup->fetch(PDO::FETCH_ASSOC)){
					?>

					<p class="coll_kind_item_text"><?php echo $rowcoll['count']?></p>

					<?php
						}
					?>		
					<?php
						}catch(PDOException $e){
							echo $e->getMessage();
						}
					?>
				</div>	
			</div>
			<!-- 紅色結束 -->

			<!-- 搜尋 -->
		<!-- <div class="coll_search">
				<div id="a1">
					<input type="text" placeholder="請輸入菜色關鍵字" class="coll_search_lift">
					<img src="image/search.svg" alt="" title="搜尋" class="coll_search_right">
				</div>
			</div> -->
			<!-- 搜尋結束	 -->

		</div>
		</section>

		<section>	
		<div class="coll_title part-9 part-s-12 part-l-12">
			<div class="coll_title_noColl--container">
				<div class="coll_title_kind part-12 part-s-12 part-l-12">
					<p class="coll_nocoll">尚未有任何收藏項目種類</p>
				</div>
				<div class="coll_food coll_nocoll_txt part-6 part-s-6 part-l-6">
					<p id="coll_nocoll_txt">您目前沒有任何收藏，建議前往<a href="">餐點一覽</a>參考看看</p>

				</div>
			</div>
			
<?php
		try{
			require_once("connectmenu.php");

		    $sql = "select * from meal_genre";
		    $Menu = $pdo ->query($sql);
		   

if( $Menu->rowCount()==0){
?>
	<div class="coll_title_kind part-12 part-s-12 part-l-12">
		<p class="coll_nocoll">尚未有任何收藏項目種類</p>
	</div>
	<div class="coll_food coll_nocoll_txt part-6 part-s-6 part-l-6">
		<p id="coll_nocoll_txt">您目前沒有任何收藏，建議前往<a href="">餐點一覽</a>參考看看</p>

	</div>
<?php
}else{
	while($rowMenu=$Menu->fetch(PDO::FETCH_ASSOC)){	//餐點類別
		
?>
		<div class="coll_title_kind part-12 part-s-12 part-l-12">
				<div class="coll_title_kind_line part-7 .part-s-3">
					<img src="image/topic_border.svg" alt="" class="title_kind_line_icon">
				</div>
				<div class="coll_title_kind_text part-2 .part-s-6">
					<img src="image/<?php echo $rowMenu["meal_genre_Pic"]?>" alt="soup.png" title="" class="title_kind_icon" id="A<?php echo $rowMenu["mealGenre_No"]?>">
					<p><?php echo $rowMenu["mealGenre_Name"]?></p>
				</div>
				<div class="coll_title_kind_line part-7 .part-s-3">
					<img src="image/topic_border_r.svg" alt="" class="title_kind_line_icon">
				</div>
			</div>
<?php
		$mealsql = "select * from meal,membercoll where mealGenre_No=" . $rowMenu["mealGenre_No"]. "&& member_No = $memNo && meal.meal_No = membercoll.meal_No";
		$Menus = $pdo ->query($mealsql);
		while($rowMenus=$Menus->fetch(PDO::FETCH_ASSOC)){	//餐點類別的餐點內容
?>


			<div class="coll_food part-3 part-s-6 part-l-6">
				<a href="javascript:;" class="coll_food_X part-12 del_coll" data-id="<?php echo $rowMenu['mealGenre_No']?>">
					<img src="image/trash.svg" alt="" title="取消收藏" class="coll_food_X_icon del_coll">
				</a>
				<div class="coll_food_title part-12">
					<p><?php echo $rowMenus["meal_Name"]?></p>
				</div>

				
				<div class="coll_food_score part-12">
				<!-- <div class="scoreEgg-container">
					<ul>
						<li>
							<div class="pic part-s-2">
								<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
							</div>
						</li>
						<li>
							<div class="pic part-s-2">
								<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
							</div>
						</li>
						<li>
							<div class="pic part-s-2">
								<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
							</div>
						</li>
						<li>
							<div class="pic part-s-2">
								<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
							</div>
						</li>
						<li>
							<div class="pic part-s-2">
								<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
							</div>
						</li>
					</ul>
				</div> -->
							
				</div>


				<div class="coll_food_pic part-12">
					<a href="<?php echo $rowMenus['meal_No']?>"><img src="image/menu/<?php echo $rowMenus['meal_Pic']?>" alt="<?php echo $rowMenus['meal_Pic']?>" title="<?php echo $rowMenus['meal_Pic']?>" class="coll_food_pic_icon"></a>
				</div>

				<div class="coll_food_info part-9">
					<p class="coll_food_info_text"><?php echo $rowMenus["meal_Info"]?></p>
				</div>
				<div class="coll_food_price part-6">
					<p><?php echo $rowMenus["meal_Price"]?>元</p>
				</div>

				<a class="coll_food_shop part-6 mainBTN" id="A<?php echo $rowMenus['meal_No']?>">
					<div class="coll_food_shop_button ">
						<img src="image/cart.svg" alt="cart" title="加入購物車" class="coll_food_shop_icon">
						<p class="coll_food_shop_text">加入購物車</p>
						<input type="hidden" value="<?php echo $rowMenus['meal_Name']?>|<?php echo $rowMenus["meal_Pic"]?>|<?php echo $rowMenus["meal_Price"]?>|1">
					</div>
				</a>
			</div>
<?php			
			}
		}
	}

?>		
		</div>

	</section>


<?php
}catch(PDOException $e){
		echo $e->getMessage();
		}
?>

<script>
	
		var liList = document.querySelectorAll(".nav li");
		
		liList.forEach(function(item){

			var struct = '';

			struct = document.createElement("div");     
			struct.className = "view";
			
			struct1 = document.createElement("div");     
			struct1.className = "slice s" + 10;
		
			for (var i = 9; i > 0; i--) {
		
				struct2 = document.createElement("div");     
				struct2.className = "slice s" + i;
		
				struct2.appendChild(struct1);
	
				struct1 = struct2;
			}

			struct.appendChild(struct2);
		
			item.appendChild(struct);
			
		});

	</script>

	<!-- 評分 -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
	  		integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
	  		crossorigin="anonymous"></script>
	

	<script type="text/javascript">
	window.addEventListener('load', function() {
		var notMealColl = 
		``;
		var mealTotalCount = document.getElementsByClassName('coll_total_num')[0];

		var noMealLink = document.getElementsByClassName('coll_title_noColl--container')[0];
		noMealLink.children[0].style.float = 'none';
		noMealLink.children[1].style.float = 'none';
		noMealLink.children[1].style.margin = 'auto';
		if(mealTotalCount.innerText == 0) { //if these is no collection in this member collection
			noMealLink.style.display = 'block';
		} else {
			noMealLink.style.display = 'none';
		}
		
	})
	$(function(){
	 
	 
		 $(".del_coll").click(function(){
		  
		  var statu = confirm("確定取消收藏嗎?");
		  var this_coll = $(this).parent();
		  
			  if(!statu){
			   return false;
			  }
		 		
				  $.ajax({
					    type:'POST',
					    url:'del_coll.php',
					    data:{
					    'id': $(this).attr("data-id")
					},
					    success:function(msg){
						      if(msg == 1){
						       alert( 'Delete Successful!' );
						       this_coll.fadeOut();
						       location.reload();
						      }else{
						       alert( 'Delete Failed!' );
						      }      
					    },
					    error:function(){
					      alert( 'Delete Failed!' );
					    }
			    
			   	  });
		  
		 });
	 });
	
</script>

	

	



</body>
</html>