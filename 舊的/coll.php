<?php
	require_once('nav.php');
	ob_start();
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" >
	<link rel="stylesheet" href="css/style.css">
	
</head>
<body>
	
	
	<!-- 導覽列 -->
	<header>
		
	</header>
	<!-- 導覽列結束 -->

	<section>
		<div class="coll_slogan part-12 part-s-12">
			<div class="coll_slogan_title part-12">
				<p id="coll_slogan_txt">我的收藏</p>
				
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
					<p class="coll_total_num">27</p>
					<p class="coll_total_title">已收藏菜色總數</p>
				</div>
				<div class="coll_total_s part-12 part-s-6 part-l-6">
					<p>已收藏菜色總數</p>
				</div>
			</div>	
			<!-- 橘色結束 -->
			
			<!-- 紅色 -->
			<div class="coll_kind  part-s-12 part-l-12">
					<div class="coll_kind_item part-4 part-s-2 part-l-2 ">
						<a href="#A1"><img src="image/soup.png" alt="hot_pot" title="鍋物" class="kind_icon"></a>
						<p class="coll_kind_item_title">鍋物</p>
						<p class="coll_kind_item_text">1</p>
					</div>
					<div class="coll_kind_item part-4 part-s-2 part-l-2">
						<a href="#A5"><img src="image/veget.png" alt="vegetarian" title="素食" class="kind_icon kind_icon_vegetarian"></a>
						<p class="coll_kind_item_title">素食</p>
						<p class="coll_kind_item_text">2</p>
					</div>
					<div class="coll_kind_item part-4 part-s-2 part-l-2">
						<a href="#A4"><img src="image/denshyoku.png" alt="Diet" title="定食" class="kind_icon kind_icon_denshyoku"></a>
						<p class="coll_kind_item_title">定食</p>
						<p class="coll_kind_item_text">3</p>
					</div>
					<div class="coll_kind_item part-4 part-s-2 part-l-2">
						<a href="#A3"><img src="image/lame.png" alt="noodles" title="拉麵" class="kind_icon"></a>
						<p class="coll_kind_item_title">拉麵</p>
						<p class="coll_kind_item_text">4</p>
					</div>
					<div class="coll_kind_item part-4 part-s-2 part-l-2">
						<a href="#A1"><img src="image/bandon.png" alt="convenient" title="便當" class="kind_icon"></a>
						<p class="coll_kind_item_title">便當</p>
						<p class="coll_kind_item_text">5</p>
					</div>
					<div class="coll_kind_item part-4 part-s-2 part-l-2">
						<a href="#A2"><img src="image/don.png" alt="Risotto" title="丼飯" class="kind_icon"></a>
						<p class="coll_kind_item_title">丼飯</p>
						<p class="coll_kind_item_text">6</p>
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
					<img src="image/<?php echo $rowMenu["meal_genre_Pic"]?>" alt="soup.png" title="鍋物" class="title_kind_icon" id="A<?php echo $rowMenu["mealGenre_No"]?>">
					<p><?php echo $rowMenu["mealGenre_Name"]?></p>
				</div>
				<div class="coll_title_kind_line part-7 .part-s-3">
					<img src="image/topic_border_r.svg" alt="" class="title_kind_line_icon">
				</div>
			</div>
<?php
		$mealsql = "select * from meal where mealGenre_No=" . $rowMenu["mealGenre_No"];
		$Menus = $pdo ->query($mealsql);
		while($rowMenus=$Menus->fetch(PDO::FETCH_ASSOC)){	//餐點類別的餐點內容
?>				
			<div class="coll_food part-3 part-s-6 part-l-6">
				<div class="coll_food_X part-12">
					<img src="image/trash.svg" alt="" title="取消收藏" class="coll_food_X_icon">
				</div>
				<div class="coll_food_title part-12">
					<p><?php echo $rowMenus["meal_Name"]?></p>
				</div>

				
				<div class="coll_food_score part-12">
				<div class="scoreEgg-container">
								<ul>
									<li>
										<div class="pic">
											<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
										</div>
									</li>
									<li>
										<div class="pic">
											<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
										</div>
									</li>
									<li>
										<div class="pic">
											<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
										</div>
									</li>
									<li>
										<div class="pic">
											<img src="image/eggEmpty.svg" alt="scoreYes" class="score">
										</div>
									</li>
									<li>
										<div class="pic">
											<img src="image/eggEmpty.svg" alt="scoreYes" class="scoreW">
										</div>
									</li>
								</ul>
							</div>
							<p>
								<span class="scoreNum" id="grouponDetail_score">4.0</span>
							</p>
				</div>


				<div class="coll_food_pic part-12">
					<a href="<?php echo $rowMenus["meal_No"]?>"><img src="image/menu/<?php echo $rowMenus["meal_Pic"]?>" alt="<?php echo $rowMenus["meal_Pic"]?>" title="<?php echo $rowMenus["meal_Pic"]?>" class="coll_food_pic_icon"></a>
				</div>

				<div class="coll_food_info part-9">
					<p class="coll_food_info_text"><?php echo $rowMenus["meal_Info"]?></p>
				</div>
				<div class="coll_food_price part-6">
					<p><?php echo $rowMenus["meal_Price"]?>元</p>
				</div>

				<div class="coll_food_shop part-6 mainBTN">
					<div class="coll_food_shop_button ">
						<img src="image/cart.svg" alt="cart" title="加入購物車" class="coll_food_shop_icon">
						<p class="coll_food_shop_text">加入購物車</p>
					</div>
				</div>
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
	<script>
        function $all(all) {
            return document.querySelectorAll(all);
        }
        score = {};
        score = {
            get: function(ee, src1, src2) {
                if(ee) {
                    // alert(ee);
                    var score;
                    score =  Math.round($all(ee)[0].innerText);
                    var src1 = src1;
                    var src2 = src2;
                    getScore(score, src1, src2);
                }
                
            },
            src_white: '',
            src_black: '',
        }
        function getScore(x, srcW, srcB) {
            // 找到所有需要計算的分數container;
            // document.createElement('div');

            var scoreEgg = document.getElementsByClassName('scoreEgg-container');
            // 轉換分數為蛋蛋
            for(let i = 0; i < scoreEgg.length ; i++) {
                console.log(i);
                // var score = Math.round(scoreEgg[i].getAttribute('score'));
                for(let x = 0 ; x < $all('.scoreEgg-container ul li').length; x++) {
                    console.log(x);
                scoreEgg[i].children[0].children[x].children[0].children[0].src = srcW;}
                var score = x;
                for(let j = 0; j < score ; j ++) {
                    scoreEgg[i].children[0].children[j].children[0].children[0].src = 
                    srcB;
                }
            }
        }
	</script>
	
	<script>
        window.onload = function() {
            score.get(
            '.scoreNum', //抓取分數的容器，自訂class名稱
            'image/eggEmpty.svg' ,  //預設的白色評分
            'image/eggFull.svg');  //顯示的有顏色評分
            // 'https://freeiconshop.com/wp-content/uploads/edd/star-outline.png' ,  //預設的白色評分
            // 'http://simpleicon.com/wp-content/uploads/star.png');  //顯示的有顏色評分
        }
    </script>



</body>
</html>