// 數字增減
window.onload = function(){
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
//數字增減結束

//加入購物車
//加入購物車結束

//新增留言

//新增留言結束
