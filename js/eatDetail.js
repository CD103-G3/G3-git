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
            qty.value = parseInt(qty.value) + 1;  
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
        if(isNaN(qty.value)){  
            qty.value = min;  
        }  
        if (qty.value.length > 2){
            qty.value = max; 
        }
    };
};
//數字增減結束