<?php
try {
  require_once('mem_connect.php');
  session_start();
  if( $_SESSION['mem_id']){
    $sql = 'select m.ring_no, m.mem_no, m.mem_status, m.headshot, m.mem_id,m.mem_name,m.mem_psw,m.mem_tel,m.mem_email,m.mem_addr,o.cret_date,o.order_no,oi.product_no ,oi.product_amout,oi.product_price FROM `member` m JOIN `orders` o ON (m.mem_no = o.mem_no) JOIN `order_item` oi ON (o.order_no = oi.order_no) where mem_id = :mem_id && mem_psw = :mem_psw';
    
    $ress = $pdo->prepare($sql);
    $ress->bindParam(':mem_id', $_SESSION['mem_id']);
    $ress->bindParam(':mem_psw', $_SESSION['mem_psw']);
    $ress->execute();
    // $member_order = $ress->fetchObject();
    while($aaa = $ress->fetchObject()){
      $arr[] = $aaa;
    }
    echo json_encode($arr);
    
  }else{
    echo json_encode(['a'=>"fuck"]);
  }
 
  

} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}