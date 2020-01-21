
<?php
// $test = $_REQUEST["product_price"];
// $test1 = $_REQUEST["ship_addr"];
// $test2 = $_REQUEST["receiver_name"];
// $test3 = $_REQUEST["receiver_tel"];
// echo $test;
// echo $test1;
// echo $test2;
// echo $test3;
// echo "123";
// session_start();
// exit( $_REQUEST["product_price"]);
try {
  // $dsn = "mysql:host=localhost;port=8889;dbname=dd104g3;charset=utf8";
  // $user = "root";
  // $password = "root";
  // $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
  // $pdo = new PDO($dsn, $user, $password, $options);
  // $_SESSION["mem_no"] = 1;

  require_once('../pdo.php');

  $sql = "insert into `orders` (`product_price`,`mem_no`,`cret_date`,`ship_addr`,`receiver_name`,`receiver_tel`,`order_sta`) values (:product_price,:mem_no, NOW(),:ship_addr,:receiver_name,:receiver_tel,1)";
  $cart = $pdo->prepare($sql);
  $cart->bindValue(":product_price", $_REQUEST["product_price"]);
  $cart->bindValue(":mem_no", $_REQUEST["mem_no"]);
  $cart->bindValue(":ship_addr", $_REQUEST["ship_addr"]);
  $cart->bindValue(":receiver_name", $_REQUEST["receiver_name"]);
  $cart->bindValue(":receiver_tel", $_REQUEST["receiver_tel"]);
  $cart->execute();
  
  echo $_REQUEST["product_price"];
  echo $_REQUEST["ship_addr"];
  echo $_REQUEST["receiver_name"];
  echo $_REQUEST["receiver_tel"];
  echo $_REQUEST["cret_date"];
} catch (PDOException $e) {
  echo $e->getMessage();
}
?>