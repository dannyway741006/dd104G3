<?php
  try{
    require_once('./connect.php');
    $sql = 'insert into `program` (mem_no,  pro_col, pro_title) values (:mem_no, :pro_col, :pro_title)';
    $res = $pdo->prepare($sql);
    $res->bindParam(':mem_no', $_POST['mem_no']);
    $res->bindParam(':pro_col', $_POST['pro_col']);
    $res->bindParam(':pro_title', $_POST['pro_title']);
    $res->execute();
    $lastId = $pdo->lastInsertId();
    echo json_encode(['status'=>'success', 'content'=>'新建成功', 'data'=>$lastId]);
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }