<?php
  try{
    require_once('../pdo.php');
    $sql = "select * from `member`";
    $member = $pdo->prepare($sql);
    $member->execute();
    
    if( $member->rowCount() == 0 ){ //找不到
      //傳回空的JSON字串
      echo "{}";
    }else{ //找得到
      //取回一筆資料
      $memRow = $member->fetchAll(PDO::FETCH_ASSOC);
      // $memRow = $member->fetchObject();  //$memRow->memName
      //送出json字串
      echo json_encode( $memRow);
    }  
    
  }catch(PDOException $e){
    echo $e->getMessage();
  }
?>

