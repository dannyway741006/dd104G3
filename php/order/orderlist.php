<?php
try {
  require_once('../pdo.php');

  $sql = "insert into `order_item` (`mem_no`,`product_name_color`,`order_product_price`,`order_product_num`,`cret_time`) values (:mem_no,:product_name_color,:order_product_price,:order_product_num,NOW());";
  $orderlist = $pdo->prepare($sql);
  $orderlist->bindValue(":mem_no", $_REQUEST["mem_no"]);
  $orderlist->bindValue(":product_name_color", $_REQUEST["product_name_color"]);
  $orderlist->bindValue(":order_product_price", $_REQUEST["order_product_price"]);
  $orderlist->bindValue(":order_product_num", $_REQUEST["order_product_num"]);
  $orderlist->execute();
  
  echo $_REQUEST["mem_no"];
  echo $_REQUEST["product_name_color"];
  echo $_REQUEST["order_product_price"];
  echo $_REQUEST["order_product_num"];
  
} catch (PDOException $e) {
  echo $e->getMessage();
}
?>