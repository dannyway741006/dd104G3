<?php
try {
  require_once('../pdo.php');
  $sql = 'select * from `program` p 
  LEFT JOIN `todo_content` t on p.pro_no = t.pro_no
  WHERE p.mem_no = 37 AND t.todo_cont_clock = 1 AND todo_cont_sta = 0';
  $res = $pdo->prepare($sql);
  $res->bindParam('mem_no', $_POST['mem_no']);
  $res->execute();
  if($res->rowCount()){
    $clockList = $res->fetchAll(PDO::FETCH_ASSOC);
    foreach($clockList as $list){
      $data[] = [
        // 'todoContentId'=>$list['todo_cont_no'],
          'id'=>$list['todo_cont_no'],
          'title'=>$list['todo_cont'],
          'runstatus'=>0,
          'currentTime'=>0,
          'totalTime'=>$list['todo_timer'],
          'complete'=>$list['todo_cont_sta'] ? true : false,
          'isClock'=>$list['todo_cont_clock'] ? true : false,
      ];
    }
    echo json_encode(['status' => 'success', 'data' => $data], JSON_NUMERIC_CHECK);
  }else {
    echo json_encode(['status' => 'error', 'content' => '沒有資料']);
  }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
