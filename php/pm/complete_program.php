<?php
  try {
    require_once('../pdo.php');
    $sql = "update `program` set pro_sta = :pro_sta 
    where pro_no = :pro_no";
    $res = $pdo->prepare($sql);
    $res->bindParam('pro_sta', $_POST['pro_sta']);
    $res->bindParam('pro_no', $_POST['pro_no']);
    $res->execute();
  
    echo json_encode(['status' => 'success', 'content' => '加入已完成專案']);
  } catch (PDOException $e) {
    echo $e->getLine();
    echo $e->getMessage();
  }