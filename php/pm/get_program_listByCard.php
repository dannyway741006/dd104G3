<?php
  try{
    require_once('../pdo.php');
    $sql = 'select * from `program` where mem_no = :mem_no';
    $res = $pdo->prepare($sql);
    // $res->bindParam(':mem_no', $_POST['mem_no']);
    $res->bindValue(':mem_no', 1);
    $res->execute();
    if($res->rowCount() !== 0){
      $projects = $res->fetchAll(PDO::FETCH_ASSOC);
      $info = [];
      foreach($projects as $project){
        $info[] = [
          'pro_no'=>$project['pro_no'],
          'pro_title'=>$project['pro_title'],
          'changeimage'=>false,
          'pro_col'=>$project['pro_col'],
          'show_complete_info_box'=>'false',
          'show_delete_info_box'=>'false',
          'invite_add_member_addr'=>"",
          'hideMember_sum'=>'false',
          'program_memeber'=>[],
          'card_list_todo'=>[
            'cards'=> [],
            'type'=> 'card_list_todo'
          ],
          'card_list_doing'=>[
            'cards'=> [],
            'type'=> 'card_list_doing'
          ],
          'card_list_done'=>[
            'cards'=> [],
            'type'=> 'card_list_done'
          ],
          'pro_sta'=>$project['pro_sta']
        ];
      }
      echo json_encode(['status'=>'success', 'data'=> $info]);
    }else{
      echo json_encode(['status'=>'error', 'content'=>'沒有資料']);
    }
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }