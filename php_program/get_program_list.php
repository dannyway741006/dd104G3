<?php
  try{
    require_once('../pdo.php');
    $sql = 'select * from `program` where mem_no = :mem_no';
    $res = $pdo->prepare($sql);
    $res->bindParam(':mem_no', $_POST['mem_no']);
    $res->execute();
    if($res->rowCount() !== 0){
      $projects = $res->fetchAll(PDO::FETCH_ASSOC);
      $info = array();
      foreach($projects as $project){
        $info[] = [
          'id'=>$project['pro_no'],
          'info'=>array(
            'title'=>$project['pro_title'],
            'color'=>$project['pro_col']
          ),
          'list'=>array(
            array(
              'status'=>'待辦事項',
              'todo'=>array()
            ),
            array(
              'status'=>'進行中',
              'todo'=>array()
            ),
            array(
              'status'=>'已完成',
              'todo'=>array()
            )
          )
        ];
      }
      echo json_encode(['status'=>'success', 'data'=>$info]);
    }else{
      echo json_encode(['status'=>'error', 'content'=>'沒有資料']);
    }
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }