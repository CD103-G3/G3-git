
document.getElementById("#siginSubmit").addEventListener('click',function(){
//=====使用Ajax,送出帳密
var xhr = new XMLHttpRequest();
xhr.onload = function (){
if( xhr.status == 200){
alert("送出成功");

}else{
alert(xhr.status);
}
}


xhr.open("post", "BackstageSignin.php", true);
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
var data_info = "#sigin-member-Id".value +  //會員密碼
"&sigin-member-Psw".value; //會員密碼
console.log(data_info);
xhr.send(data_info);

});
