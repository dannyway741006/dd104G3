<?php

//連線資料庫
try {
  require_once("connect_nicole.php");


  if ($_FILES['product_src']['error'] === UPLOAD_ERR_OK) {
    $from = $_FILES['product_src']['tmp_name'];
    $to = "../../img/mall_img/" . $_FILES['product_src']['name'];
    if (copy($from, $to)) {
      echo "上傳成功 <br>";
    } else {
      echo "上傳失敗 <br>";
    }
  }

  if ($_FILES['product_bg_src']['error'] === UPLOAD_ERR_OK) {
    $from = $_FILES['product_bg_src']['tmp_name'] ;
    $to = "../../img/mall_img/" . $_FILES['product_bg_src']['name'];
    if (copy($from, $to)) {
      echo "上傳成功 <br>";
    } else {
      echo "上傳失敗 <br>";
    }
  }


  if ($_FILES['product_slide_img']['error'] === UPLOAD_ERR_OK) {
    $from = $_FILES['product_slide_img']['tmp_name'];
    $to = "../../img/mall_img/" . $_FILES['product_slide_img']['name'];
    if (copy($from, $to)) {
      echo "上傳成功 <br>";
    } else {
      echo "上傳失敗 <br>";
    }
  }

    $sql = "UPDATE `mall_product` SET product_price=:product_price, product_src=:product_src,product_color=:product_color,product_desc=:product_desc,product_bg_src=:product_bg_src,product_slide_img=:product_slide_img WHERE product_no = :product_no";

    $product = $pdo->prepare($sql);
    $product->bindValue(":product_no", $_POST["product_no"]);
    $product->bindValue(":product_price", $_POST["product_price"]);
    $product->bindValue(":product_src", "img/mall_img/".$_FILES["product_src"]["name"]);
    $product->bindValue(":product_color", $_POST["product_color"]);
    $product->bindValue(":product_desc", $_POST["product_desc"]);
    $product->bindValue(":product_bg_src", "img/mall_img/".$_FILES["product_bg_src"]["name"]);
    $product->bindValue(":product_slide_img", "img/mall_img/".$_FILES["product_slide_img"]["name"]);
    $product->execute();
 
    echo "修改成功";
} catch (PDOException $e) {
  $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
  $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
}
