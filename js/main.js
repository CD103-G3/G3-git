function $id(id) {
    return document.getElementById(id);
}
function $class(className) {
    return document.getElementsByClassName(className);
}
function randomOneNum(min, max) {
    var length = max - min+1;
    // var arr = [];
    // for(let i in length) {
    //     arr.push(min+1);
    // }
    var rand = min + Math.floor(Math.random() * length)
    return rand;
}
var storage = sessionStorage;





function init() {

    // sessionStorage設定
    // 發起飯團的sessionStorage
    if(storage.addMealList == null) {
        storage.addMealList = ''; //storage.setItem('addItemList', '' );
    }
    // 設定發起的餐數
    var mealCount = 0;
    if(storage.mealCount == null) {
        storage.mealCount = 0; //storage.setItem('addItemList', '' );
    }

    // 設定發起人數
    var numIn = 10;
    if(storage.numIn == null) {
        storage.numIn = numIn; //storage.setItem('addItemList', '' );
    } else {
        numIn = parseInt(storage.numIn);
        if($id('people')) {
            $id('people').innerText = numIn;
        }
    }

    // add or minus some number
    // 發起人數的加減
    function addOrMinus(min,max) {
        min = 10;
        max = 100;
        numIn = parseInt($id('people').innerText);
        // alert(this.id);
        if(this.id == 'plus') {
            if(numIn < max) {
                numIn += 5;
                $id('people').innerText = numIn;
                $id('people2').innerText = numIn;
                storage.numIn = numIn;
            }
            else {
                alert('上限最多為:' + max);
            }
        } else {
            if(numIn > min) {
                numIn -= 5;
                $id('people').innerText = numIn;
                $id('people2').innerText = numIn;
                storage.numIn = numIn;
            }
            else {
                alert('最少為:' + min + '人');
                $id('people').innerText = 10;
            }
        }
        // change bonus money
        calBonus();

    }
    if($id('minus')) {
        $id('minus').onclick = addOrMinus;
        $id('plus').onclick = addOrMinus;
    }


    //產生之前選的餐點
    mealArray = storage.addMealList.substr(0, storage.addMealList.length - 1).split(',');
    // alert(mealArray.length);
    if($id('mealArea')) {
        if(storage.addMealList.length > 1) {
            // alert('//');
            for(let i in mealArray) {
                mealCount++;
                var mealId = mealArray[i];
                var mealInfo = storage.getItem(mealArray[i]);     
                createMealBox(mealId, mealInfo);
                
                // originalPrice -= mealPrice;
                grouponPrice = Math.floor(originalPrice * 0.6);
                $id('originPrice').innerText = originalPrice;
                $id('salePrice').innerText = grouponPrice;
                $id('addedMealNow').innerText = mealCount;
                $class('grouponDay')[0].innerText = mealCount;
    
                $id('mealAreaInfo').style.display = 'none';
                var mealBG = mealId + '_bg';
                $id(mealBG).style.left = '0px';
                $id(mealBG).style.opacity = '.7';
    
                calBonus();
            }
            // createMealBox(e);
        }
    }
    

    // 產生從今天開始的後七天
    if($class('chooseDay-wrapper').length) {
        cal7days();
    }
    // 隨機產生title
    if ($class('randomTitle').length) {
        $class('randomTitle')[0].onclick = genRandomTitle;
    }
    //註冊3-1頁面按鈕事件
    if(storage.grouponInfo == null) {
        storage.grouponInfo = '';
    }
    // 名稱和日期和標籤寫入session storage
    if($id('page3_1_BTN')) {
        $id('page3_1_BTN').onclick = function() {
            
            //if all inputed write into storage
            if(checkInput()) {
                storage.grouponInfo += $id('grouponTitle').value  + '|';
                // selected date
                for(let i in $class('element-day')[0].children) {
                    if($class('element-day')[0].children[i].checked) {
                        // write into storage
                        // alert($class('element-day')[0].children[i].id);
                        storage.grouponInfo += $class('element-day')[0].children[i].getAttribute('dateadded') + '|';
                    }
                }
                // groupon tag
                var optionIndex = $id('grouponTag').selectedIndex;
                storage.grouponInfo += $id('grouponTag').options[optionIndex].innerText + '|';
            } else {
                alert('請輸入飯團名稱~');
            }
            // title
            
            // alert($id('grouponTag').selectedIndex);
           
            // $id('grouponTag').option[optionIndex];
            // storage.grouponInfo +=
            // 檢查input輸入 
            
        }
    }

    // 註冊3-3確定發起的按鈕
    if($id('3_3_confirmCreate_BTN')) {
        // 產生meal 和其相關數據
        createMealList();
        $id('3_3_confirmCreate_BTN').onclick = function() {
            // 清空storage
            alert('已成功發起飯團!!');
            storage.clear();
            
        }
    }
    
    

    
    //add meal function
    var addThisMeal_btn = document.getElementsByClassName('addThis');
    for(var i in addThisMeal_btn) {
        addThisMeal_btn[i].onclick = addMeal;
    } 
}
if(storage.mealCount == null) { var mealCount = 0; } 
else { var mealCount = parseInt(storage.mealCount); }

var originalPrice = 0;
var grouponPrice;

function cal7days(e) {
    // alert(e.getDay());
    var d = new Date();
    for(let x = 0 ; x < 7 ; x++) {
        d.setDate(d.getDate() + 1);
        
        // 產生七天的radioInput
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var dString = d.toString();
        var day = dString.substr(0,3);

        var dayNowInput = (x == 0) ? 
        `<input type='radio' id='${month}/${date}' name='selectDate' dateAdded=${x} checked>` : `<input type='radio' id='${month}/${date}' name='selectDate' dateAdded=${x}>`;
         
        var dayNowLabel = `<label for ='${month}/${date}'><span>${month}/${date}</span>${day} </label>`;
        
        $class('element-day')[0].innerHTML += dayNowInput;
        $class('element-day')[0].innerHTML += dayNowLabel;
        // console.log(d);
        // alert();
    }
}

function checkInput() {
    if($id('grouponTitle').value == '') {
        return false;
    } else {
        return true;
    }
}
function createMealList(e) {
    // setting title and tag
    var grouponInfo = storage.grouponInfo.split('|');
    $id('3_3_grouponTitle').innerHTML = `
    ${grouponInfo[0]}
    <span class="grouponTag">
        #${grouponInfo[2]}
    </span>`;

    //settting date
    var selectedDate = new Date();
    selectedDate.setDate(selectedDate.getDate() + parseInt(grouponInfo[1]));
    var dataildate = selectedDate.getDate();
    var datailmonth = selectedDate.getMonth() + 1;
    $class('startDate')[0].innerText = datailmonth + '/' + dataildate;
    selectedDate.setDate(selectedDate.getDate() + parseInt(storage.getItem('mealCount')));
    dataildate = selectedDate.getDate();
    datailmonth = selectedDate.getMonth() + 1;
    $class('endDate')[0].innerText = datailmonth + '/' + dataildate;

    $class('grouponDay')[0].innerText = parseInt(storage.getItem('mealCount')) + 2;
    
    //setting bonus 
    $class('people')[0].innerText = storage.numIn;
    $class('people')[1].innerText = storage.numIn;
    bonusNow = Math.round(storage.numIn * parseInt(storage.mealCount) / 10);
    $class('bonus-coin')[0].innerText = bonusNow;
    $class('bonus')[0].innerText = bonusNow;
    //setting  price
    for(let i in mealArray) {
        // mealCount++;
        let mealId = mealArray[i];
        let mealInfo = storage.getItem(mealArray[i]);     
        createMealBox(mealId, mealInfo);
        
        // originalPrice -= mealPrice;
        grouponPrice = Math.floor(originalPrice * 0.6);
        $id('originPrice').innerText = originalPrice;
        $id('salePrice').innerText = grouponPrice;
        $id('addedMealNow').innerText = mealCount;
        $class('grouponDay')[0].innerText = mealCount;

    }
}


function genRandomTitle() {
    var adj = [ '超棒的', '吃飽飽的', '呷尚飽'];
    var adv = [ '前所未見', '史無前例', '驚天霹靂'];
    var n = ['一起吃飯!','拿購物金!','揪個飯團吧~'];
 
    // alert(randomOneNum(1, 3));
    var title = adv[randomOneNum(1, adv.length-1)] 
    + adj[randomOneNum(1, adj.length-1)] 
    + n[randomOneNum(1, n.length-1)];

    $id('grouponTitle').value = title;

}

// 計算購物金
function calBonus() {
    bonusNow = Math.round(storage.numIn * parseInt(storage.mealCount) / 10);
    $id('3_2Bonus').innerText = bonusNow;
}

// 計算餐點數量
function calMealNumber(e) {
    $id('addedMealNow').innerText = mealCount;
    $class('grouponDay')[0].innerText = mealCount;

    //get mealList from session storage
    var mealList = storage.getItem('addMealList');
    var mealArray = mealList.substr(0, mealList.length - 1).split(',');

    // originalPrice = 0;
    // if(mealArray) {
    //     for(let i in mealArray) {
    //         var mealInfo = storage.getItem(mealArray[i]);
    //         var mealPrice = parseInt(mealInfo.split('|')[1]);
            
    //         originalPrice += mealPrice;
    //         grouponPrice = Math.floor(originalPrice * 0.6);
    //     }
    // }
    
    // console.log(mealArray);
    $id('originPrice').innerText = originalPrice;
    $id('salePrice').innerText = grouponPrice;
}
// add meal info to session storage
function createMealSession(e) {
    storage.addMealList += e.id + ',';
    // alert('#' + e.id + 'input');
    storage[e.id] = document.querySelector('#' + e.id + 'input').value;
}
function deleteMeal(e) {
    // meal count
    mealCount --;
    storage.mealCount = mealCount;
    $id('addedMealNow').innerText = mealCount;
    $class('grouponDay')[0].innerText = mealCount;

    //bonus
    calBonus();
    
    var thisMealId = e.getAttribute('mealid').replace('_bg', '');
    var mealPrice = parseInt(storage.getItem(thisMealId).split('|')[1]);
    console.log(storage.getItem(thisMealId).split('|')[1]); 
    originalPrice -= mealPrice;
    grouponPrice = Math.floor(originalPrice * 0.6);
    $id('originPrice').innerText = originalPrice;
    $id('salePrice').innerText = grouponPrice;
    let id = e.getAttribute('mealid').replace('_bg', '');
    // alert(id);
    storage.addMealList= storage.getItem('addMealList').replace(id + ',', '');
    // alert('#' + e.id + 'input');
    storage.removeItem(id);
}
function removeThisMeal(e) {
    calMealNumber(this);
    deleteMeal(this);
    var mealid = this.getAttribute('mealid');
    //remove checked bg
    $id(mealid).style.left = '1000000px';
    $id(mealid).style.opacity = '0';
    //remove this from mealArea
    this.parentNode.parentNode.parentNode.removeChild(
        this.parentNode.parentNode
    );
    if($id('mealArea').children.length < 2) {
        $id('mealAreaInfo').style.display = 'block';
        $id('mealArea').style.display = 'flex';
    }
}

function addMeal(e) {
    //count cal
    //bonus
    calBonus();
    
    createMealSession(this);
    // calMealNumber(this);

    var mealList = storage.getItem('addMealList');
    var mealArray = mealList.substr(0, mealList.length - 1).split(',');

    
    // for(let j =  ; j < $id('mealArea').children.length ; j++) {
    //     $id('mealArea').removeChild($id('mealArea').children[j]);
    // //     // alert('/');
    // }
    // for(let i in mealArray) {
    var mealId = this.id;
    var mealInfo = storage.getItem(mealId);     
    createMealBox(mealId, mealInfo);

    mealCount ++;
    $id('addedMealNow').innerText = mealCount;
    $class('grouponDay')[0].innerText = mealCount;
    storage.mealCount = mealCount;

    $id('originPrice').innerText = originalPrice;
    $id('salePrice').innerText = grouponPrice;
       
        // originalPrice -= mealPrice;
        
    grouponPrice = Math.floor(originalPrice * 0.6);

    

    //add to session storage
    

    //gray bg cover
    $id('mealAreaInfo').style.display = 'none';
    this.parentNode.parentNode.children[3].style.left = '0px';
    this.parentNode.parentNode.children[3].style.opacity = '.7';
    // this.parentNode.parentNode.children[3].onclick = removeThisMeal;


    //create the same meal in 3-2 right added list
}
function createMealBox(meal, mealInfo) {
    if($id('mealArea')) {
        var mealArea = $id('mealArea');
        mealArea.style.display = 'block';
    }
    

    var mealList = storage.getItem(meal);
    let info = mealList.substr(0, mealList.length).split('|');
    console.log(info);
    var mealName = info[0];
    var mealPrice = info[1];
    var mealPic = info[2];
    originalPrice += parseInt(mealPrice);
    console.log(parseInt(mealPrice));
    grouponPrice = originalPrice * 0.6;


    // newMeal div
    var newMeal = document.createElement('div');
    newMeal.className = 'selectMeal';
    if($id('mealArea')) {
        mealArea.appendChild(newMeal);
    } else {
        $class('addedMeal-wrapper')[0].appendChild(newMeal);
    }
    

    //second layer topUI------
    var topUI = document.createElement('div');
    topUI.className = 'topUI';
    newMeal.appendChild(topUI);

    if($id('mealArea')) {
        var addThis = document.createElement('div');
        addThis.className = 'removeThis';
        // addThis.id = 'removeThis';
        addThis.setAttribute('mealId', meal + '_bg');
        addThis.innerHTML = 'X<div class="hint">刪除此餐點</div>';
        addThis.onclick = removeThisMeal;
        topUI.appendChild(addThis);
    }
    

    var scaleUp = document.createElement('div');
    scaleUp.className = 'scaleUp';
    scaleUp.innerHTML = '<i class="fas fa-search"></i>';
    topUI.appendChild(scaleUp);

    //second layer pic------
    var pic = document.createElement('div');
    pic.className = 'pic';
    // var picSrc = e.parentNode.parentNode.children[1].children[0].src;
    pic.innerHTML = '<img src="' + mealPic + '" alt="'+ mealPic +'">';
    newMeal.appendChild(pic);

    //second layer title------
    var mealTitle = document.createElement('div');
    mealTitle.className = 'meal-title';
    newMeal.appendChild(mealTitle);

    var mealScore = document.createElement('div');
    mealScore.className = 'meal-score';
    mealScore.innerHTML = 'AAAA';
    mealTitle.appendChild(mealScore);

    var title = document.createElement('div');
    title.className = 'title-wrapper';
    // var titleName = e.parentNode.parentNode.children[2].children[1].children[0].innerText;
    // var titlePrice = e.parentNode.parentNode.children[2].children[1].children[1].innerText;
    title.innerHTML = '<h3>' + mealName +'</h3><span> ' + mealPrice + '</span>';
    mealTitle.appendChild(title);
}
window.addEventListener('load',init);