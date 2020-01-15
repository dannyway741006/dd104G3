<?php
try{
  require_once("connect_nicole.php");
  $sql = "select * from `mall_product` 
  where product_no=:product_no and
  product_num=:product_num and
  product_price=:product_price and
  product_src=:product_src and
  product_color=:product_color and
  product_desc=:product_desc and
  product_type=:product_type and
  product_bg_src=:product_bg_src and
  product_slide_img=:product_slide_img";


  $product = $pdo->prepare($sql);
  $product->bindValue(":product_no", $_GET["product_no"]);
  $product->bindValue(":product_num", $_GET["product_num"]);
  $product->bindValue(":product_price", $_GET["product_price"]);
  $product->bindValue(":product_src", $_GET["product_src"]);
  $product->bindValue(":product_color", $_GET["product_color"]);
  $product->bindValue(":product_desc", $_GET["product_desc"]);
  $product->bindValue(":product_type", $_GET["product_type"]);
  $product->bindValue(":product_bg_src", $_GET["product_bg_src"]);
  $product->bindValue(":product_slide_img", $_GET["product_slide_img"]);

  $product->execute();
  
  if( $product->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "{}";
  }else{ //找得到
    //取回一筆資料
    $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
  }	
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>