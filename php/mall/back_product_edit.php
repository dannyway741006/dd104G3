<?php
$psn = $_REQUEST["psn"];
$errMsg = "";
//連線資料庫
try{
  require_once("connect_nicole.php");
  $sql = "select * from `mall_product`";

 $product = $pdo->prepare($sql);
  // where product_no=:product_no and product_num=:product_num and product_price=:product_price and product_src=:product_src and product_color=:product_color and product_desc=:product_desc and product_type=:product_type and product_bg_src=:product_bg_src and product_slide_img=:product_slide_img

  // $product->bindValue(":product_no", $_GET["product_no"]);
  // $product->bindValue(":product_num", $_GET["product_num"]);
  // $product->bindValue(":product_price", $_GET["product_price"]);
  // $product->bindValue(":product_src", $_GET["product_src"]);
  // $product->bindValue(":product_color", $_GET["product_color"]);
  // $product->bindValue(":product_desc", $_GET["product_desc"]);
  // $product->bindValue(":product_type", $_GET["product_type"]);
  // $product->bindValue(":product_bg_src", $_GET["product_bg_src"]);
  // $product->bindValue(":product_slide_img", $_GET["product_slide_img"]);
  $products->bindValue(":psn", $psn);
  $products->execute();
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
}
?>  
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>查詢商品資料</title>
<style>
th {
  background:#bfbfef;
}
td {
  border-bottom:1px deeppink dotted;
}
</style>
</head>

<body>
<?php 
if( $errMsg != ""){ //例外
  echo "<div><center>$errMsg</center></div>";
}elseif($products->rowCount()==0){
      echo "<div><center>查無此商品資料</center></div>";
}else{
      $prodRow = $products->fetchObject();
?>
<br>
<h2 style="text-align:center;color:deeppink">書籍基本資料</h2>
  <table align="center" width="300" >
    <form action="prodUpdateToDb.php">
      <input type="hidden" name="psn" value="<?php echo $prodRow->psn;?>">
    <tr><th>書號</th><td><?php echo $prodRow->psn;?></td></tr>
    <tr><th>書名</th><td><input type="text" name="pname" value="<?php echo $prodRow->pname;?>"></td></tr>
    <tr><th>價格</th><td><input type="text" name="price" value="<?php echo $prodRow->price;?>"></td></tr>
    <tr><th>作者</th><td><input type="text" name="author" value="<?php echo $prodRow->author;?>"></td></tr>
    <tr><th>頁數</th><td><input type="text" name="pages" value="<?php echo $prodRow->pages;?>"></td></tr>
    <tr><th>圖檔</th><td><input type="text" name="image" value="<?php echo $prodRow->image;?>"></td></tr>
    <tr><td colspan="2" align="center"> <input type="submit" value="確定修改"></td></tr>
    </form>
  </table>
  <?php

}
?>
</body>
</html>
