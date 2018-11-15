<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/backstage.css">
    <title>餐點資料後台</title>
</head>
<body class="out">
    <div class="d-flex">
        <div class="container col-xl-2">
            <div class="list-group back-nav">
                <div class="back-logo"><img src="images/logo3.png" alt="logo"></div>
                <div class="back-signout">
                    <span>登入者</span>
                    <a href="#">登出</a>
                </div>
                <a href="backstage-meal.html" class="list-group-item list-group-item-action back-change focus-color">餐點資訊</a>
                <a href="backstage-groupon.html" class="list-group-item list-group-item-action back-change">飯團管理</a>
                <a href="backstage-message.html" class="list-group-item list-group-item-action back-change">留言審核</a>
                <a href="backstage-chatBot.html" class="list-group-item list-group-item-action back-change">客服雞器人</a>
                <a href="backstage-achievement.html" class="list-group-item list-group-item-action back-change">成就管理</a>
                <a href="backstage-memberOrder.html" class="list-group-item list-group-item-action back-change">訂單管理</a>
                <a href="backstage-manager.html" class="list-group-item list-group-item-action back-change">管理員帳號</a>
            </div>
        </div>
    
        <div class="container col-xl-10">
            <div class="back-text">
                <div class="banner"><button type="button" class="mainBTN" tabindex="-1" data-toggle="modal" data-target="#Meal">新增</button></div>
                <div class="modal fade" id="Meal" tabindex="-1" role="dialog" aria-labelledby="MealTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <!-- 新增跳窗 -->
                        <div class="modal-content">
                            <figure class="modal-img">
                                <img src="images/dayCookIndex_whiteBG1.svg" alt="">
                            </figure>
                            <div class="modal-header">
                                <h5 class="modal-title" id="MealTitle">新增餐點資料</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="d-flex form-group">
                                        <label for="mealGenre" class="title-width">餐點類別</label>
                                        <select class="form-control" id="mealGenre">
                                            <option>拉麵</option>
                                            <option>丼飯</option>
                                            <option>鍋物</option>
                                            <option>定食</option>
                                            <option>便當</option>
                                            <option>素食</option>
                                        </select>
                                    </div>
                                    <div class="d-flex form-group">
                                        <label for="mealName" class="col-form-label title-width">餐點名稱</label>
                                        <input type="text" class="form-control" id="mealName">
                                    </div>
                                    <div class="d-flex form-group">
                                        <label for="mealPrice" class="col-form-label title-width">餐點單價</label>
                                        <input type="text" class="form-control" id="mealPrice">
                                    </div>
                                    <div class="d-flex form-group">
                                        <label for="mealInfo" class="col-form-label title-width">餐點介紹</label>
                                        <textarea class="form-control" id="mealInfo" rows="3"></textarea>
                                    </div>
                                    <div class="d-flex form-group">
                                        <label for="mealCal" class="col-form-label title-width">餐點卡路里</label>
                                        <input type="text" class="form-control" id="mealCal">
                                    </div>
                                    <div class="d-flex form-group">
                                            <label for="mealSold" class="title-width">餐點狀態</label>
                                            <select class="form-control" id="mealSold">
                                                <option>上架</option>
                                                <option>下架</option>
                                            </select>
                                        </div>
                                    <div class="d-flex form-group">
                                        <label for="mealPic" class="title-width">上傳餐點圖片</label>
                                        <input type="file" class="form-control-file" id="mealPic">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer justify-content-center">
                                <button type="button" class="btn btn-primary mainBTN">存檔</button>
                                <button type="button" class="btn btn-secondary subBTN" data-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">餐點編號</th>
                            <th scope="col">餐點類別</th>
                            <th scope="col">餐點名稱</th>
                            <th scope="col">餐點圖片</th>
                            <th scope="col">餐點單價</th>
                            <th scope="col">餐點卡路里</th>
                            <th scope="col">餐點狀態</th>
                            <th scope="col">修改</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php 
                        try {
                            require_once("connectMember.php");
                            $sql = "select * from meal A1 inner join meal_genre A2 on A1.mealGenre_No = A2.mealGenre_No group by A1.meal_No order by meal_No";
                            $products = $pdo -> query( $sql );
                            while($prodRow = $products->fetchObject()){
                        ?>
                        <tr>
                            <td scope="row"><?php echo $prodRow->meal_No; ?></td>
                            <td><?php echo $prodRow->mealGenre_Name; ?></td>
                            <td><?php echo $prodRow->meal_Name; ?></td>
                            <td><img src="images/<?php echo $prodRow->meal_Pic; ?>" class="one-size" alt=""></td>
                            <td><?php echo $prodRow->meal_Price; ?></td>
                            <td style="display: none;"><?php echo $prodRow->meal_Info; ?></td>
                            <td><?php echo $prodRow->meal_Cal;?></td>
                            <td>上架</td>

                            <td>
                                <input style="display:none;" type="text" name="mealno" id="mealno" value="<?php echo $prodRow->meal_No;?>"/>
                                <i class="fas fa-pencil-alt touch" data-toggle="modal" data-target="#viewMeal" mealNo="<?php echo $prodRow->meal_No;?>" onclick="getDishes(<?php echo $prodRow->meal_No;?>)"  >
                                    <!-- <input type="button"  value="mealno" /> -->
                                </i>
                                <div class="modal fade" id="viewMeal" tabindex="-1" role="dialog" aria-labelledby="viewAddMealTitle" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <!-- 新增跳窗 -->
                                    <div class="modal-content">
                                        <figure class="modal-img">
                                            <img src="images/dayCookIndex_whiteBG1.svg" alt="">
                                        </figure>
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="viewAddMealTitle">餐點資料</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form action=""></form>
                                        </div>
                                        <div class="modal-footer justify-content-center">
                                            <button type="button" class="btn btn-primary mainBTN btn-touch">修改</button>
                                            <button type="button" class="btn btn-secondary subBTN" data-dismiss="modal">取消</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </td>
                        </tr>
                    <?php
                        }
                    } catch (PDOException $e) {
                        echo "錯誤原因 : ", $e -> getMessage(), "<br>";
                        echo "錯誤行號 : ", $e -> getLine(), "<br>";
                    }
                    ?> 
                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>   
    
</body>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<!-- 按鈕切換 -->
    <script>
        $(".touch").click(function(){

            $(".change").attr("readonly",true);
            $(".change-select").attr("disabled",true);
            $('.btn-touch').click(function(){
                $(".change").attr("readonly",false);
                $(".change-select").attr("disabled",false);
                //..........
                if($(".btn-touch").html() == "確認"){ //update to db;
                    $('.btn-touch').html("修改");
                    $(".change").attr("readonly",true);
                    $(".change-select").attr("disabled",true);
                }else{
                    $('.btn-touch').html("確認");
                }
                //..........
            });
        });
    </script>
    <script src="meal.js"></script>
</html>
