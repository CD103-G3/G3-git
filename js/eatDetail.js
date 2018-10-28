// 數字增減
window.onload = function(){
    var qty = document.getElementById("qty");
    var qty_add = document.getElementById("qty_add");
    var qty_cut = document.getElementById("qty_cut");
    var min = 0;
    var max = 100;

    qty_add.onclick = function(){
        if(qty.value == max || qty.value > max){  
            qty.value = max;  
        }else{  
            qty.value = parseInt(qty.value) + 1;  //parseInt() 將輸入的字串轉成整數
        }   
    };

    qty_cut.onclick = function(){
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
//數字增減結束

//加入購物車
//加入購物車結束

//新增留言
window.onload=function(){
    //create 外殼
    member_msg = document.createElement('div');  //增加div區塊
    member_msg.className= 'member_msg clearfix';  //增加區塊後套用原CSS格式
    document.getElementById('msg').appendChild(member_msg);  //此子層增加div區塊

    var btn = document.getElementsByClassName("comments"); //送出按鈕
    btn.addEventListener('click',function(){
        addItem();
    })
}
function addItem(){
    member_msg = document.createElement('div');
    member_msg.className= 'member_msg clearfix';

    //create imagearea
    var member_img = document.createElement('div');
    member_img.className = 'member_img part-2 part-md-2 part-lg-1';
    var image = document.createElement('img');
    image.src = '#';
    image.alt = '留言者';

    var member_txt = document.createElement('div');
    member_txt.className= 'member_txt part-10 part-md-10 part-lg-11 clearfix';

    var member_id = document.createElement('div');  //P標籤塞內容
    member_id.innerHTML = '哆啦A夢';

    document.getElementById('msg').appendChild(member_msg);
    member_msg.appendChild(member_txt);
    member_txt.appendChild(member_img);
    member_txt.appendChild(member_id);
    member_img.appendChild(image);
}
//新增留言結束
