function $id(id) {
    return document.getElementById(id);
}
function $class(className) {
    return document.getElementsByClassName(className);
}
function $all(all) {
    return document.querySelectorAll(all);
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




//初始化註冊or產生東西
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
            alert('//');
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
    //5-1 change Meals
    if($class('changeMeal-container').length > 0) {
        for(let i in $class('meal-box')) {
            $class('meal-box')[i].onclick = addToMenu;
        }

    }

    //6-1
    if($class('grouponDatail-container').length > 0) {
        var smallPicChange = $all('.mealSmallPic-container .meal-box');
        for(let i in smallPicChange) {
            smallPicChange[i].onmouseover = changeMealInfo;
        }
    }
    if($class('scoreEgg-container').length > 0) {
        getScoreEgg();
    }

    //6-2
    if($all('.grouponPayment-wrapper').length > 0) {
        var paymentMethod = $all('.paymentMethod');
        for(let y in paymentMethod) {
            paymentMethod[y].oninput = function() {
                $id('selectedResult').innerHTML = 
                this.nextElementSibling.getElementsByTagName('h3')[0].innerText;
            }
        }
    }

    //6-3 animation
    if($all('.dish-container').length > 0) {
        anime6_3(); 
    }
}
//-------------------------------



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
function calScorePic() {

}
// 6-1
function changeMealInfo(e) {
    var thisInfo = this.id;
    $id('grouponDetail_pic').src = this.children[1].children[0].src;
    $id('grouponDetail_title').innerHTML = this.children[2].innerText;
    var smallPicChange = $('.mealSmallPic-container .meal-box');
    for(let i in smallPicChange) {
        smallPicChange[i].className = 'meal-box';
    }
    this.className += ' active';    
    //保留用
    var thisScore = parseFloat(this.getAttribute('score'));
     $id('grouponDetail_score').innerHTML = thisScore;
     console.log($all('.scoreEgg-container ul li'));
     for(let x = 0 ; x < $all('.scoreEgg-container ul li').length; x++) {
        $all('.scoreEgg-container ul li img')[x].src = 'asset/scoreEgg_w.svg';
     }
     $class('scoreEgg-container')[0].setAttribute('score', thisScore);
     getScoreEgg();
    // $id('grouponDetail_score').innerHTML = ;
    // $id('grouponDetail_kcal').innerHTML = ;

}

function getScoreEgg(e) {
    var scoreEgg = $class('scoreEgg-container');
    for(let i = 0; i < scoreEgg.length ; i++) {
        console.log(i);
        var score = Math.round(scoreEgg[i].getAttribute('score'));
        let j = 0;
        do{
            scoreEgg[i].children[0].children[j].children[0].children[0].src = 
            'asset/scoreEgg_y.svg';
            j++;
        } while(j < score);
    }
    // console.log(score);

}

// 6-3 tweenMax
function anime6_3() {
    var tl = new TimelineMax();

    tl.fromTo(".dish-container", 1.2, {
        // x: 220,
        // y: 100,
        alpha: 0.2,
        scale: 1.3,
    },{
        alpha: 1,
        scale: 1,
        delay: 0.3,
        ease: CustomEase.create("custom", "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 0.362,1 0.37,0.985 0.406,0.922 0.466,0.878 0.53,0.83 0.609,0.855 0.622,0.864 0.698,0.914 0.741,0.993 0.748,1.01 0.82,0.95 0.84,0.946 0.859,0.96 0.878,0.974 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1"),
    });

    tl.fromTo(".chickPic", .1, {
        y: 10,
    },{
        y: -10,
        // repeatDelay: 0.5,
        yoyo: true,
        repeat: 22,
    });

    tl.fromTo(".chickPic", 2, {
        x: 900,
        opacity: 0,
    },{
        x: 0,
        opacity: 1,
        // repeatDelay: 0.5,
        ease: Power4.easeOut,
    }, "-=2");

    tl.fromTo(".chickDialogue", 1, {
        opacity: 0,
        rotation: 0,
        transformOrigin: 'center bottom',
    },{
        opacity: 1,
        rotation: 0,
        // repeatDelay: 0.5,
        // yoyo: true,
        // repeat: 3,
    });
    tl.fromTo(".chickDialogue", 1, {
        rotation: 0,
        transformOrigin: 'center bottom',
    },{
        rotation: 10,
        // repeatDelay: 0.5,
        yoyo: true,
        repeat: 3,
    });

    

    // tl.add([ani01, ani02]);
}

// 5-1
function addToMenu(e) {
    // this.classList.toggle('active');
    // alert(this.classList);
    // console.log(this.classList);
    var noMeal = function() {
        if($id('mealChanger').children[0].children.length <= 0) {
            $class('info')[0].classList.add('active');
        } else {
            $class('info')[0].classList.remove('active');
        }
    }

    let thisMealInfo = this.children[0].getAttribute('mealInfo');
    // alert(thisMealInfo);
    let infoArr = thisMealInfo.split('|');
    // alert(infoArr);
    var newChangeMeal = `<li class="clearfix">
        <div class="mealName grid-9">${infoArr[2]}</div>
        <div class="deleteIt grid-3">X</div>
        <input type="hidden" value="${thisMealInfo}">
    </li>`;
    
    
    //還沒被選，增加物件和註冊事件
    if(this.classList.value.indexOf('active') == -1) {
        this.classList.add('active');
        $id('mealChanger').children[0].innerHTML += newChangeMeal;
        var thisMealBox;
        // 從X把原本餐點的已選擇關掉
        for(let x in $class('deleteIt')) {
            $class('deleteIt')[x].onclick = function() {
                for(let x = 0; x < $class('meal-box').length ; x++) {
                    if($class('meal-box')[x].children[0].getAttribute('mealInfo') == this.nextElementSibling.value) {
                        thisMealBox = $class('meal-box')[x];
                        console.log(thisMealBox);
                    }
                }
                thisMealBox.classList.remove('active');
                this.parentNode.parentNode.removeChild(this.parentNode);
                
                noMeal();

            }
        }
    }
    //從餐點直接取消選取 
    else {
        this.classList.remove('active');
        var thisList;
        var mealChangerLi = $id('mealChanger').children[0];
        for(let y = 0; y < mealChangerLi.children.length;y++) {
            console.log(mealChangerLi.children[y]);
            // console.log(thisMealInfo);
            if(mealChangerLi.children[y].getElementsByTagName('input')[0].value == thisMealInfo) {
                thisList = mealChangerLi.children[y];
            }
        }
        $id('mealChanger').children[0].removeChild(thisList);
        noMeal();
    }
    
    // $id('mealChanger').insertBefore(newChangeMeal, $id('mealChanger').children[0].firstChild);
    

    // 尚無餐點的顯示
    noMeal();
}
window.addEventListener('load',init);