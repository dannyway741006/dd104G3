<?php
  try{
    require_once('../pdo.php');
    $sql = 'select * from `manager` where mgr_id = :mgr_id && mgr_psw = :mgr_psw';
    $res = $pdo->prepare($sql);
    $res->bindParam(':mgr_id', $_POST['mgr_id']);
    $res->bindParam(':mgr_psw', $_POST['mgr_psw']);
    $res->execute();

    if($res->rowCount()){
      $member = $res->fetchObject();
      echo json_encode([
        'status'=>'success', 
        'content'=>'登入成功', 
        'data'=>$member
      ]);
    }else {
      echo json_encode(['status'=>'error', 'content'=>'帳號或密碼錯誤']);
    }
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }