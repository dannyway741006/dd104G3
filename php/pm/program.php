<?php
session_start();
try {
  require_once('../pdo.php');

  switch ($_POST['type']) {
    // case "add_program":
    //   $sql = 'insert into `program` (mem_no,  pro_col, pro_title) values (:mem_no, :pro_col, :pro_title)';
    //   $res = $pdo->prepare($sql);
    //   $_SESSION['mem_no'] = 1; //-----------------------------
    //   $res->bindValue(':mem_no', $_SESSION['mem_no']);
    //   $res->bindValue(':pro_col', $_POST['pro_col']);
    //   $res->bindValue(':pro_title', $_POST['pro_title']);
    //   $res->execute();
    //   $lastId = $pdo->lastInsertId();

    //   $sql = "insert into `join_program` (mem_no, pro_no) values( ?, $lastId)";
    //   $join = $pdo->prepare($sql);
    //   $join->bindValue(1, $_SESSION["mem_no"]);
    //   $join->execute();

    //   echo $lastId;
    //   break;

    case "complete_program":
      $sql = "update `program` set pro_sta = :pro_sta 
        where pro_no = :pro_no";
      $res = $pdo->prepare($sql);
      $res->bindParam('pro_sta', $_POST['pro_sta']);
      $res->bindParam('pro_no', $_POST['pro_no']);
      $res->execute();

      echo json_encode(['status' => 'success', 'content' => '加入已完成專案']);
      break;

    case "delete_program":
      $sql = "delete FROM `program` WHERE `pro_no` = :pro_no";
      $res = $pdo->prepare($sql);
      $res->bindParam('pro_no', $_POST['pro_no']);
      $res->execute();

      echo json_encode(['status' => 'success', 'content' => '刪除該專案']);
      break;
  }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
