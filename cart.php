
<?php
// $test = $_GET["product_price"];
// echo $test;
// echo "123";
// session_start();
// exit( $_REQUEST["product_price"]);
try{
  $dsn = "mysql:host=localhost;port=8889;dbname=dd104g3;charset=utf8";
	$user = "root";
	$password = "root";
	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
  $pdo = new PDO( $dsn, $user, $password, $options); 
  // $_SESSION["mem_no"] = 1;

  $sql = "insert into `test` (`test`) values (:product_price)";
  $member = $pdo->prepare($sql);
  $member->bindValue(":product_price", $_POST["product_price"]);
  $member->execute();
  echo $_REQUEST["product_price"];
}catch(PDOException $e){
  echo $e->getMessage();
}
?>