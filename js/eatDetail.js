// 數字增減
function detailQty(){
    var qty = document.getElementById("qty");
    var qtyAdd = document.getElementById("qty-add");
    var qtyCut = document.getElementById("qty-cut");
    var min = 0;
    var max = 100;

    qtyAdd.onclick = function(){
        if(qty.value == max || qty.value > max){  
            qty.value = max;  
        }else{  
            qty.value = parseInt(qty.value) + 1;  //parseInt() 將輸入的字串轉成整數
        }   
    };

    qtyCut.onclick = function(){
        if(qty.value == min || qty < min){  
            qty.value = min;  
        }else{  
            qty.value = parseInt(qty.value) - 1;
        }  
    };

    qty.onkeyup = function(){
        if(isNaN(qty.value)){      //isNaN()是否為數字
            qty.value = min;  
        }  
        if (qty.value.length > 2){
            qty.value = max; 
        }
    };
};
window.addEventListener('load',detailQty)
//數字增減結束

//加入購物車
//加入購物車結束

//新增留言
function eatDetailMsg() {
    
    document.getElementById('commentsBtn').onclick = function() {  //當點擊送出後新增留言
        
        var text = document.getElementById('memberLetter');  //找到textarea中的字

        var today = new Date();  //建立物件
        var year = today.getFullYear();
        var mon = today.getMonth()+1;
        var day = today.getDate();

        var memberImg = "images/logo.png";  //變更圖片路徑

        var textDiv = `<div class="member-msg clearfix">     
                            <div class="member-msg clearfix">
                                <figure class="member-img part-2 part-md-2 part-lg-1">
                                    <img src=${memberImg}>
                                </figure>
                                <div class="member-txt part-10 part-md-10 part-lg-11 clearfix">
                                    <div class="member-id">訪客</div>
                                    <div class="comments-time">${year}/${mon}/${day}</div>
                                    <p>${text.value}</p>
                                    <input type="submit" name="comments" id="commentsBtn" class="comments nextBTN" value="檢舉">
                                </div>
                            </div>
                        </div>`;    //把留言內容用要包的div名稱包起來
        document.getElementsByClassName('text-container')[0].innerHTML += textDiv;  //新增留言到留言區
        text.value = '';  //清空textarea中的字
    }
};
window.addEventListener('load', eatDetailMsg);
//新增留言結束

//隨機產生留言
function msg() {

    document.getElementById('commentsChange').onclick = function() {
        var title = document.getElementById('memberLetter');
        var n = ['太好吃了吧!!!','天啊!這麼好吃的東西!我要感謝媽媽!','我一定要帶妹妹17來吃!阿~我沒有妹妹'];
        var max  =2;
        var min = 0;
        var title = n[Math.floor(Math.random()*(max-min+1)+min)];

        grouponTitle.value = title;
    }
}

window.addEventListener('load',msg);
