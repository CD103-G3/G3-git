<?php
	// require_once("login.php");
?>
<header>
	<input type="checkbox" id="navctrl">
	<div class="phone-nav">
		<div id="view1"></div>
		<div class="nav-left">
			<label class="hb" for="navctrl">
				<span class="line"></span>
			</label>
		</div>
		<div class="logo">
			<a href="javascript:void(0)">
				<img src="images/logo.png" alt="logo">
			</a>
		</div>
		<div class="nav-right">			
			<span class="seach-button">
				<img src="images/icon/search.svg" width="25" alt="seach">
				搜尋
			</span>
		</div>
	</div>
	<nav>
		<ul>
			<li class="logo">
				<div id="view4"></div>
				<a href="javascript:void(0)">
					<img src="images/logo.png" alt="logo">
				</a>
			</li>
			<li class="member">
				<div id="view6"></div>
				<div class="before-login">
					<a href="javascript:void(0)">註冊</a>
					<a href="javascript:void(0)">登入</a>
				</div>
				<div class="after-login">
					<div>
						<img src="images/icon/user.svg" alt="member-Pic" class="member-Pic">
					</div>
					<div>
						<span><img src="images/icon/riceball.svg" width="30" alt="achievement-Pic" class="achievement-Pic">300積分</span><br>
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
			<li class="table-hidden"><a href="javascript:void(0)">會員中心</a></li>
			<li class="table-hidden"><a href="javascript:void(0)">客服雞器人</a></li>
		</ul>
	</nav>
	<input type="checkbox" id="white-Point-control">
	<label class="white-Point floaty" for="white-Point-control">
		<ul>
			<div id="view7"></div>
			<li>
				<a href="javascript:void(0)">
					<img src="images/icon/cart.svg" alt="cart"><br>
					購物車
					<span>3</span>
				</a>
			</li>
			<li>
				<a href="javascript:void(0)">
					<img src="images/icon/qrcode.svg" alt="qrcode"><br>
					快速取餐
					<span>2</span>
				</a>
			</li>
			<li class="table-hidden">
				<a href="javascript:void(0)">
					<img src="images/icon/game.svg" alt="game"><br>
					想吃什麼？
				</a>
			</li>
			<li class="table-hidden">
				<a href="javascript:void(0)">
					<img src="images/icon/if_General_-_Office_54_1471106.svg" alt="mc"><br>
					我的收藏
				</a>
			</li>
			<li class="table-hidden">
				<a href="javascript:void(0)">
					<img src="images/icon/riceball.svg" alt="riceball"><br>
					我的飯團
				</a>
			</li>		
		</ul>
	</label>
</header>

<div class="nav_height"></div>
<!-- <script src="js/floaty.js"></script> -->

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
