
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

	//-----------------------whitePoint--------------------------//

	var isMousemove = false;

	document.body.addEventListener('mousemove', function(event){
		mouseX = event.clientX;//滑鼠x位置
		mouseY = event.clientY;//滑鼠y位置

		if(isMousemove){
			whitePointDown();
		}
	});  

	var whitePoint = document.querySelector('.white-Point'),
		childList = whitePoint.children[0].children,
		whitePointLock = true;

	whitePoint.addEventListener('mousedown', function(){ // 按下鼠標左鍵時
	
		whitePointDown();
	}); 
	
	whitePoint.addEventListener('touchstart', whitePointDown, false); //觸摸元素時
	

	function whitePointDown(){

		whitePoint.style.transition = "0.05s";
		// whitePoint.style.top = mouseY - 25 + 'px';
		// whitePoint.style.left = mouseX - 25 + 'px';
		// whitePoint.style.top = mouseY;
		// whitePoint.style.left = mouseX;
		isMousemove = true; //處於按壓拖移小白點狀態
	}

	document.body.addEventListener('mouseup', whitePointClose, true); //在body釋放鼠標左鍵時
	document.body.addEventListener('touchend', whitePointClose, true); //從body元素移除手指時

	function whitePointClose(){

		var w = window.innerWidth,
			h = window.innerHeight;

		if(w<1024){
			whitePoint.style.width = "50px";
			whitePoint.style.height = "50px";
			
			whitePointBeforeY = mouseY - 25;

			whitePoint.style.left = w-50 + "px";
			whitePointBeforeX = w-50;

			for(i=0;i<childList.length;i++){
				childList[i].style.display = 'none';
			}
		}else{

			whitePoint.style.transition = "0s";
			whitePoint.style.width = '14.28571428%';
			whitePoint.style.height = "100px";
			whitePoint.style.display = 'static';

			for(i=0;i<childList.length;i++){
				childList[i].style.display = 'none';
			}

			for(i=0;i<3;i++){
				childList[i].style.display = 'inline-block';
			}
		}
	}

	whitePoint.addEventListener('mouseup', function(){

		isOpen = !isOpen; //現在是否打開小白點
		whitePointUp();

	}, true); //釋放鼠標左鍵時
	
	whitePoint.addEventListener('touchend', function(){

		isOpen = !isOpen; //現在是否打開小白點
		whitePointUp();

	}, true); //從元素移除手指時

	var isOpen = false,
		whitePointBeforeX = 0;
		whitePointBeforeY = 75;

	function whitePointUp(){
	
		var w = window.innerWidth,
			h = window.innerHeight,
			minwh = w > h ? h : w;

		isMousemove = false; //離開按壓拖移小白點狀態

		//取得小白點前後位置,判斷使用者想要開啟或拖移小白點
		whitePointLock = Math.abs(whitePointBeforeX - mouseX) < 50 && Math.abs(whitePointBeforeY - mouseY) < 50;

		if(w<1024){
			whitePoint.style.display = 'fixed';
			whitePoint.style.transition = "0.5s";

			if(isOpen && whitePointLock){

				whitePoint.style.width = minwh * 0.7 + 'px';
				whitePoint.style.height = minwh * 0.7  + 'px';
				
				whitePoint.style.top = (h / 2) - (minwh * 0.35) + 'px';
				whitePoint.style.left = (w / 2) - (minwh * 0.35) + 'px';
				
				for(i=0;i<childList.length;i++){
					childList[i].style.display = 'inline-block';
				}

			}else{

				whitePoint.style.width = "50px";
				whitePoint.style.height = "50px";
				
				whitePointBeforeY = mouseY - 25;

				if(mouseX < w/2){
					whitePoint.style.left = 0;
					whitePointBeforeX = 0; 
				}else{
					whitePoint.style.left = w-50 + "px";
					whitePointBeforeX = w-50;
				}

				for(i=0;i<childList.length;i++){
					childList[i].style.display = 'none';
				}
			}
		}else{

			whitePoint.style.transition = "0s";
			whitePoint.style.width = '14.28571428%';
			whitePoint.style.height = "100px";
			whitePoint.style.display = 'static';

			for(i=0;i<childList.length;i++){
				childList[i].style.display = 'none';
			}

			for(i=0;i<3;i++){
				childList[i].style.display = 'inline-block';
			}
		}
	}

	whitePoint.addEventListener('mousemove', whitePointMove); //在元素內移動時
	whitePoint.addEventListener('Touchmove', whitePointMove, false); //移動手指時

	function whitePointMove(){
	}

	window.addEventListener("resize", function(){
    	whitePointUp();
	});