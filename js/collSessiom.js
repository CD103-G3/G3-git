var storage = sessionStorage;
function doFirst(){
	if(storage['addItemList']==null){
		storage['addItemList'] ='';  //storage.setItem('addItemList','');
	}
	
	// 幫給個add Cart建事件聆聽功能。
	var list = document.querySelectorAll('.coll_food_shop'); //list是陣列
	for(var i=0; i<list.length;i++){
		list[i].addEventListener('click',function(){
			var Menus = document.querySelector('#'+this.id+' input').value; //('#A1001_input').value
			addItem(this.id, Menus);
		});
	}

}
function addItem(itemId, itemValue){
    if(storage[itemId]){
        console.log('got it');
    }else{
        storage[itemId] = itemValue;
        console.log(storage[itemId]);
        storage['addItemList'] += itemId + ',';
    }
}
window.addEventListener('load',doFirst);
