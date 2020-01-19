<?php
try {
  require_once('../pdo.php');

  switch ($_POST['type']) {
    case "delete_card":
      $sql = "delete `card` WHERE `card`.`card_no` = :card_no";
      $res = $pdo->prepare($sql);
      $res->bindValue('card_no', $_POST['card_no']);
      $res->execute();

      echo json_encode(['status' => 'success', 'content' => '刪除卡片']);
      break;
  }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
