<?php
try {
  require_once('../pdo.php');
  $sql = "delete FROM `program` WHERE `pro_no` = :pro_no";
  $res = $pdo->prepare($sql);
  $res->bindParam('pro_no', $_POST['pro_no']);
  $res->execute();

  echo json_encode(['status' => 'success', 'content' => '刪除該專案']);
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
