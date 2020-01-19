<?php
try {
  require_once('../pdo.php');
    $sql = 'select * 
    FROM `member` m 
    JOIN `orders` o ON (m.mem_no = o.mem_no) 
    JOIN `order_item` oi ON (o.order_no = oi.order_no) 
    where mem_no = :mem_no';
    $res = $pdo->prepare($sql);
    $res->bindParam(':mem_no', $_POST['mem_no']);
    $res->execute();
    if($res->rowCount()){
      $products = $res->fetchAll(PDO::FETCH_ASSOC);
      echo json_encode(['status'=>"success", 'data'=>$products]);
    }else {
      echo json_encode(['status'=>"error", 'content'=>'查無資料']);
    }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
