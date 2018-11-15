// 圖片放大效果
$(function() {

    // 選擇圖片class名稱為sunder-img-zoom
    $('img.sunder-img-zoom').each(function(index, image) {

        // 設定縮放比例(默認為2倍)
        // $.isNumeric() 判断輸入值類型
        // data() 從被選元素中取回數據
        var zoom = $.isNumeric($(image).data('sunder-img-zoom')) ? $(image).data('sunder-img-zoom') : 2;

        // 用<figure>包圖片
        // parent() 返回被選元素的直接父元素
        var container = $(image).wrap('<figure></figure>').parent();

        // 設定父層寬高
        // 內部<img>保持相同大小
        container.css('width', '100%');
        container.css('height', $(image).height() + 'px');

        // 添加<img>的源代碼作為父代的背景
        container.css('background-image', 'url(\'' + $(image).attr('src') + '\')');
        container.css('background-repeat', 'no-repeat');
        container.css('background-position', '-100%');

        // 在父級中按指定的縮放係數（默認為2倍）使圖像變大
        container.css('background-size', $(image).width() * zoom + 'px ' + $(image).height() * zoom + 'px');

        // 當用戶將鼠標懸停在圖像上時，將其隱藏
        $(image).on('mouseover', function(e) { $(this).hide(); 
            container.css('cursor', 'zoom-in');
        });
        $(image).on('touchstart', function(e) { $(this).hide(); });

        // 當用戶離開圖像區域時，再次顯示常規尺寸的圖像
        container.on('mouseleave', function() { $(image).show(); 
            container.css('background-position', '-100%');
        });
        container.on('touchend', function() { $(image).show(); 
            container.css('background-position', '-100%');});


        // 當用戶在圖像區域內移動鼠標時
        container.on('mousemove', function(e) {

            // 獲取圖像中的鼠標位置
            var x = -e.pageX + $(this).offset().left;
            var y = -e.pageY + $(this).offset().top;

            // 將緩衝區應用於圖像的外側10％

            // X-軸
            if(x > -$(this).width() / 10)        x = 0;
            else if(x < -$(this).width() * 0.9)  x = -$(this).width();
            else if(x > -$(this).width() / 2)    x += $(this).width() / 10 + (x + $(this).width() / 10) * ($(this).width() / 10) / ($(this).width() / 2 - $(this).width() / 10);
            else                                 x -= $(this).width() / 10 - (x + $(this).width() * 0.9) * ($(this).width() / 10) / ($(this).width() / 2 - $(this).width() / 10);

            // Y-軸
            if(y > -$(this).height() / 10)       y = 0;
            else if(y < -$(this).height() * 0.9) y = -$(this).height();
            else if(y > -$(this).height() / 2)   y += $(this).height() / 10 + (y + $(this).height() / 10) * ($(this).height() / 10) / ($(this).height() / 2 - $(this).height() / 10);
            else                                 y -= $(this).height() / 10 - (y + $(this).height() * 0.9) * ($(this).height() / 10) / ($(this).height() / 2 - $(this).height() / 10);

            // 將較大的圖像移動到鼠標位置
            $(this).css('backgroundPosition', x * (zoom - 1) + 'px ' + y * (zoom - 1) + 'px');
        });

        container.on('touchmove', function(e) {

            // 獲取圖像中的觸摸位置
            var x = -e.targetTouches[0].pageX + $(this).offset().left;
            var y = -e.targetTouches[0].pageY + $(this).offset().top;

            // 將緩衝區應用於圖像的外側10％

            // X-軸
            if(x > -$(this).width() / 10)        x = 0;
            else if(x < -$(this).width() * 0.9)  x = -$(this).width();
            else if(x > -$(this).width() / 2)    x += $(this).width() / 10 + (x + $(this).width() / 10) * ($(this).width() / 10) / ($(this).width() / 2 - $(this).width() / 10);
            else                                 x -= $(this).width() / 10 - (x + $(this).width() * 0.9) * ($(this).width() / 10) / ($(this).width() / 2 - $(this).width() / 10);

            // Y-軸
            if(y > -$(this).height() / 10)       y = 0;
            else if(y < -$(this).height() * 0.9) y = -$(this).height();
            else if(y > -$(this).height() / 2)   y += $(this).height() / 10 + (y + $(this).height() / 10) * ($(this).height() / 10) / ($(this).height() / 2 - $(this).height() / 10);
            else                                 y -= $(this).height() / 10 - (y + $(this).height() * 0.9) * ($(this).height() / 10) / ($(this).height() / 2 - $(this).height() / 10);

            // 將較大的圖像移動到鼠標位置
            $(this).css('backgroundPosition', x * (zoom - 1) + 'px ' + y * (zoom - 1) + 'px');
        });

        // 使此設置響應
        $(window).resize(function() {
            container.css('height', $(image).height() + 'px');
            container.css('background-size', $(image).width() * zoom + 'px ' + $(image).height() * zoom + 'px');
        });
    }); 
}); 
// 圖片放大效果結束

// 評分蛋增減
function $all(all) {
    return document.querySelectorAll(all);
};
const eggScore = {
    egg(egg) {
        egg.container.forEach(function(e,w) {
            var score = Math.round(e.children[0].innerText);
            // console.log(score);
            
            var figure = e.querySelectorAll('figure');
            for(let i = 0; i < figure.length ; i ++) {
                let img = figure[i].querySelectorAll('img')[0];
                img.src = egg.whiteEgg;
            }
            for(let i = 0; i < score ; i ++) {
                let img = figure[i].querySelectorAll('img')[0];
                img.src = egg.blackEgg;
            }
        })
    }
}
window.addEventListener('load', function(){
    eggScore.egg({
        container: $all('.grade'),
        whiteEgg: 'images/icon/eggEmpty.svg',
        blackEgg: 'images/icon/eggFull.svg',
    });
});
// 評分蛋增減結束

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
// 數字增減結束

// 新增留言
function eatDetailMsg() {
    
    document.getElementById('commentsBtn').onclick = function() {  //當點擊送出後新增留言
        var text = document.getElementById('memberLetter');  //找到textarea中的字
        var today = new Date();  //建立物件
        var year = today.getFullYear();
        var mon = today.getMonth()+1;
        var day = today.getDate();
        var memberImg = "images/logo.png";  //變更圖片路徑

        var textDiv = `<div class="member-msg">
                            <div class="member-data clearfix">
                                <div class="member-pic fl">
                                    <figure class="member-img fl">
                                        <img src=${memberImg}>
                                    </figure>
                                    <div class="member-id fl color">訪客訪客訪客</div>
                                </div>
                                <div class="comments-time fl">${year}/${mon}/${day}</div>
                            </div>
                            <div class="comments clearfix">
                                <p>${text.value}</p>
                                <div class="msg-btn">   
                                    <button type="submit" name="comments" id="commentsBtn" class="nextBTN">檢舉</button>
                                </div>
                            </div>
                        </div>`;    //把留言內容用要包的div名稱包起來

        document.getElementsByClassName('text-container')[0].innerHTML += textDiv;  //新增留言到留言區
        text.value = '';  //清空textarea中的字
    }
};
window.addEventListener('load', eatDetailMsg);
// 新增留言結束

//隨機產生留言
function msg() {

    document.getElementById('commentsChange').onclick = function() {
        var title=document.getElementById('memberLetter');
        var n = ['太好吃了吧!!!','天啊!這麼好吃的東西!我要感謝媽媽!','我一定要帶妹妹17來吃!阿~我沒有妹妹'];
        var max=2;
        var min=0;
        var title = n[Math.floor(Math.random()*(max-min+1)+min)];

        memberLetter.value = title;
    }
}
window.addEventListener('load',msg);
//隨機產生留言結束

