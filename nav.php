<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" >
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<input type="checkbox" id="navctrl">
		<div class="phone_nav">
			<div id="view1"></div>
			<div class="nav_left">
				<label class="hb" for="navctrl">
					<span class="line"></span>
				</label>
			</div>
			<div class="logo">
				<a href="javascript:void(0)">
					<img src="image/logo.png" alt="logo">
				</a>
			</div>
			<div class="nav_right">			
				<span class="seach_button">
					<img src="image/member_Bonus.png" alt="seach">
					搜尋
				</span>
			</div>
		</div>
		<nav>
			<ul>
				<li class="logo">
					<div id="view4"></div>
					<a href="javascript:void(0)">
						<img src="image/logo.png" alt="logo">
					</a>
				</li>
				<li class="member">
					<div id="view6"></div>
					<div class="before_login">
						<a href="javascript:void(0)">註冊</a>
						<a href="javascript:void(0)">登入</a>
					</div>
					<div class="after_login">
						<div>
							<img src="image/member_Bonus.png" alt="member_Pic" class="member_Pic">
						</div>
						<div>
							<span><img src="image/member_Bonus.png" alt="achievement_Pic" class="achievement_Pic">300積分</span><br>
							<span>Sara. always</span>
						</div>
					</div>
				</li>
				<li class="meals">
						<div id="view5"></div>
					<a href="javascript:void(0)">日食餐點</a>
				</li>
				<li class="initiate">			
					<div id="view2"></div>
					<a href="javascript:void(0)">發起飯糰</a>
				</li>
				<li class="participate">
					<div id="view3"></div>
					<a href="javascript:void(0)">參加飯糰</a>
				</li>
				<li class="table_hidden"><a href="javascript:void(0)">會員中心</a></li>
				<li class="table_hidden"><a href="javascript:void(0)">克服雞器人</a></li>
			</ul>
		</nav>
		<input type="checkbox" id="white_Point_control">
		<label class="white_Point" for="white_Point_control">
			<ul>
				<div id="view7"></div>
				<li>
					<a href="javascript:void(0)">
						<img src="image/member_Bonus.png" alt="sc"><br>
						購物車
						<span>3</span>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<img src="image/member_Bonus.png" alt="qm"><br>
						快速取餐
						<span>2</span>
					</a>
				</li>
				<li class="table_hidden">
					<a href="javascript:void(0)">
						<img src="image/member_Bonus.png" alt="wte"><br>
						想吃什麼？
					</a>
				</li>
				<li class="table_hidden">
					<a href="javascript:void(0)">
						<img src="image/member_Bonus.png" alt="mc"><br>
						我的收藏
					</a>
				</li>
				<li class="table_hidden">
					<a href="javascript:void(0)">
						<img src="image/member_Bonus.png" alt="mrb"><br>
						我的飯團
					</a>
				</li>		
			</ul>
		</label>
	</header>

	<script>

		
		for (var i = 1; i <= 7; i++) {
		
			var view = document.querySelector("#view" +　i);

			struct1 = document.createElement("div");     
			struct1.className = "slice s" + 3;
		
			for (var j = 2; j > 0; j--) {
		
				struct2 = document.createElement("div");     
				struct2.className = "slice s" + j;
		
				struct2.appendChild(struct1);
	
				struct1 = struct2;
			}
		
			view.appendChild(struct2);
			
		}

	</script>

</body>
</html>