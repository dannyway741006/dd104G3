<?php
try {
  require_once('../pdo.php');
  $sql = "delete `card` WHERE `card`.`card_no` = :card_no";
  $res = $pdo->prepare($sql);
  $res->bindParam('card_no', $_POST['card_no']);
  $res->execute();

  echo json_encode(['status' => 'success', 'content' => '刪除卡片']);
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
