<?php
  try{
    require_once('../pdo.php');
    $memName = $_POST['mem_name'] ? $_POST['mem_name'] : null;
    $memTel = $_POST['mem_tel'] ? $_POST['mem_tel'] : null;
    $memAddr = $_POST['mem_addr'] ? $_POST['mem_addr'] : null;
    $headshot = $_POST['headshot'] ? $_POST['headshot'] : null;
    $sql = 'update `member` 
    set mem_name = :mem_name, mem_tel = :mem_tel, mem_addr = :mem_addr,headshot = :headshot
    where mem_no = :mem_no';
    $res = $pdo->prepare($sql);
    $res->bindParam('mem_name', $memName);
    $res->bindParam('mem_tel', $memTel);
    $res->bindParam('mem_addr', $memAddr);
    $res->bindParam('mem_no', $_POST['mem_no']);
    $res->bindParam('headshot', $_POST['headshot']);
    $res->execute();
    
    echo json_encode(['status'=>'success', 'content'=>'修改成功']);
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }