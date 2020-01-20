<?php
try {
  require_once('../pdo.php');
  $sql = 'delete from `orders` where order_no = :order_no';
  $res = $pdo->prepare($sql);
  $res->bindParam('order_no', $_POST['order_no']);
  $res->execute();
  echo json_encode(['status'=>'success', 'content'=>'刪除成功']);
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}