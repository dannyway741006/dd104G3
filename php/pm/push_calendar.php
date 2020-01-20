<?php
try {
  require_once('../pdo.php');
  session_start();
  switch ($_POST['type']) {
    case "push_calendar_cards":
      $sql = "select * FROM `card` WHERE card_date is not null and pro_no=:pro_no";
      $res = $pdo->prepare($sql);
      $res->bindParam(':pro_no', $_POST['pro_no']);
      $res->execute();
    break;
  }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
