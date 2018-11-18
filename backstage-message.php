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
    <title>留言審核</title>
</head>
<body class="out">
    <div class="d-flex" name="top">
        <div class="container col-xl-2">
            <div class="list-group back-nav">
                <div class="back-logo"><img src="images/logo3.png" alt="logo"></div>
                <div class="back-signout">
                    <span>登入者</span>
                    <a href="#">登出</a>
                </div>
                <a href="backstage-meal.html" class="list-group-item list-group-item-action back-change">餐點資訊</a>
                <a href="backstage-groupon.html" class="list-group-item list-group-item-action back-change">飯團管理</a>
                <a href="backstage-message.html" class="list-group-item list-group-item-action back-change focus-color">留言審核</a>
                <a href="backstage-chatBot.html" class="list-group-item list-group-item-action back-change">客服雞器人</a>
                <a href="backstage-achievement.html" class="list-group-item list-group-item-action back-change">成就管理</a>
                <a href="backstage-memberOrder.html" class="list-group-item list-group-item-action back-change">訂單管理</a>
                <a href="backstage-manager.html" class="list-group-item list-group-item-action back-change">管理員帳號</a>
            </div>
        </div>
    
        <div class="container col-xl-10">
            <div class="back-text">
                <div class="banner"></div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">檢舉編號</th>
                            <th scope="col">檢舉日期</th>
                            <th scope="col">被檢舉會員</th>
                            <th scope="col">餐點名稱</th>
                            <th scope="col">留言內容</th>
                            <th scope="col">檢舉次數</th>
                            <th scope="col">審核狀態</th>
                            <th scope="col">審核結果</th>
                            <th scope="col">修改</th>
                        </tr>
                    </thead>
                    <?php 
                        try {
                            require_once("phpDB/connectDB_CD103G3.php");
                            $sql = "select * from meal A1 inner join meal_genre A2 on A1.mealGenre_No = A2.mealGenre_No group by A1.meal_No order by meal_No";
                            $products = $pdo -> query( $sql );
                            while($prodRow = $products->fetchObject()){
                    ?>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>2018-11-12</td>
                            <td>ABC123</td>
                            <td>(生)特級海鮮丼</td>
                            <td>這是能吃的東西嗎</td>
                            <td>2</td>
                            <td>未審核</td>
                            <td>下架留言</td>
                            <td>
                                <i class="fas fa-pencil-alt touch" data-toggle="modal" data-target="#message"></i>
                                <div class="modal fade" id="message" tabindex="-1" role="dialog" aria-labelledby="messageTitle" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <!-- 新增跳窗 -->
                                        <div class="modal-content">
                                            <figure class="modal-img">
                                                <img src="images/dayCookIndex_whiteBG1.svg" alt="">
                                            </figure>
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="messageTitle">留言審核</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="d-flex form-group">
                                                        <label for="reportNo" class="col-form-label title-width">檢舉編號</label>
                                                        <input type="text" class="form-control" id="reportNo" value="1" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="reportDate" class="col-form-label title-width">檢舉日期</label>
                                                        <input type="text" class="form-control" id="reportDate" value="2018-11-12" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="reportMem" class="col-form-label title-width">被檢舉會員</label>
                                                        <input type="text" class="form-control" id="reportMem" value="ABC123" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="mealName" class="col-form-label title-width">餐點名稱</label>
                                                        <input type="text" class="form-control" id="mealName" value="(生)特級海鮮丼" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="messageContent" class="col-form-label title-width">留言內容</label>
                                                        <input type="text" class="form-control" id="messageContent" value="這是能吃的東西嗎" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="reportQty" class="col-form-label title-width">檢舉次數</label>
                                                        <input type="text" class="form-control" id="reportQty" value="2" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="reportStatus" class="col-form-label title-width">審核狀態</label>
                                                        <input type="text" class="form-control" id="reportStatus" value="未審核" readonly>
                                                    </div>
                                                    <div class="d-flex form-group">
                                                        <label for="reportResult" class="title-width">審核結果</label>
                                                        <select class="form-control change-select" id="reportResult">
                                                            <option>留言保留</option>
                                                            <option>留言下架</option>
                                                        </select>
                                                    </div>
                                                </form>
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
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
  
    <a href="#top" class="toTop-arrow"><i class="fas fa-arrow-circle-up"></i></a>
 
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
</html>
