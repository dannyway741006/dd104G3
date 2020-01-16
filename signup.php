<?php
  try{
    require_once('mem_connect.php');
    $sql = 'insert into `member` (mem_id, mem_psw, mem_email, headshot) values (:mem_id, :mem_psw, :mem_email, :headshot)';
    $res = $pdo->prepare($sql);
    $res->bindParam(':mem_id', $_POST['mem_id']);
    $res->bindParam(':mem_psw', $_POST['mem_psw']);
    $res->bindParam(':mem_email', $_POST['mem_email']);
    $res->bindParam(':headshot', $_POST['headshot']);
    $res->execute();
    echo json_encode(['status'=>'success', 'content'=>'註冊成功']);
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }