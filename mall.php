<?php
try{
  require_once("connects.php");
  $sql = "select * from `mall_product` where mall_product=:mall_product,";
  $product = $pdo->prepare($sql);
  $product->bindValue(":mall_product", $_GET["mall_product"]);
  $product->execute();
  
  if( $product->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "{}";
  }else{ //找得到
    //取回一筆資料
    $productRow = $product->fetch(PDO::FETCH_ASSOC);
    // $memRow = $member->fetchObject();  //$memRow->memName
    //送出json字串
    echo json_encode($productRow);
    
    // PDO::FETCH_ASSOC 返回以欄位名稱作為索引鍵(key)的陣列(array)
    // PDO::FETCH_NUM 返回以數字作為索引鍵(key)的陣列(array)，由0開始編號
    // PDO::FETCH_BOTH 返回 FETCH_ASSOC 和 FETCH_NUM 的結果，兩個都會列出
    // PDO::FETCH_CLASS 返回一個物件，以欄位名稱設定屬性，並把設值給該屬性
  }	
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

<div class="content">
        <div class="mall_content" id="mall_content">
          <div class="mall_content_right">
            <div class="cart_bg">
              <img src="./img/icon/shopping-cart_on_gray.svg" alt="">
              <div class="mall_cart_cir">0</div>
            </div>
            <div class="mall_poduct_cart">
              <div class="mall_poduct_content">
                <div class="product_img">
                  <div class="big_pic">
                    <img class="b_img" src="img/mall_img/101_black.png" alt="">
                  </div>
                </div>

                <div class="product_text">
                  <p $>纖巧商務包</p>
                  <p>纖巧商務包</p>

                  <ul class="product_features">
                    <li>絨毛內裡 保護電腦不刮傷</li>
                    <li>凹形邊緣護墊 有效吸收抵禦衝擊</li>
                  </ul>


                  <div class="price_btn">
                    <div class="product_price">
                      <span>$</span><span class="price_sale">1,200</span>
                    </div>
                    <div class="mall_bBtn_all">
                      <select name="mall_color" id="mall_color">
                        <option value="101_black">典雅黑</option>
                        <option value="101_brown">駝棕色</option>
                        <option value="101_blue">孔雀藍</option>
                        <option value="101_white">白米色</option>
                      </select>

                      <select name="mall_amount" id="mall_amount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>

                      <button class="mall_bBtn" value="Submit">加入購物車</button>

                    </div>
                  </div>

                  </form>
                </div>
              </div>
            </div>
         
            <!-- 輪播  -->
            <div class="slider-bg">
              <h2>其它商品</h2>
              <section id="slider">
                <div class="custom1 owl-carousel owl-theme">
                  <div class="item">
                    <a href="#" class="item_list">
                      <h4><img src="./img/mall_img/101_sbg.jpg" alt=""></h4>
                      <div>纖巧商務包</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="#" class="item_list">
                      <h4><img src="./img/mall_img/102_sbg.jpg" alt=""></h4>
                      <div>迷你單肩包</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="#" class="item_list">
                      <h4><img src="./img/mall_img/103_sbg.jpg" alt=""></h4>
                      <div>手拿包</div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="#" class="item_list">
                      <h4><img src="./img/mall_img/104_sbg.jpg" alt=""></h4>
                      <div>迷你手提袋</div>
                    </a>
                  </div>
          
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>