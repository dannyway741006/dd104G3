<?php
try{
  require_once("connect.php");
  $sql = "select * from `mall_product` where product_type=:product_type";
  $product = $pdo->prepare($sql);
  $product->bindValue(":product_type", $_GET["product_type"]);
  // $product->bindValue(":product_num", $_GET["product_num"]);
  $product->execute();
  
  if( $product->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "{}";
  }else{ //找得到
    //取回一筆資料
    $productRow = $product->fetchAll(PDO::FETCH_ASSOC);
    // $memRow = $member->fetchObject();  //$memRow->memName
    //送出json字串
    echo json_encode($productRow);
  }	
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>