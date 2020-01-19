<?php
try {
  require_once('../pdo.php');
  session_start();
  $_SESSION['mem_no'] = 1; //test
  switch ($_POST['type']) {
    case "add_card":
      $pro_no = $_POST['pro_no'];
      $card_name = $_POST['card_name'];
      $sql = 'insert into `card` 
        (pro_no, card_name) values 
        (:pro_no, :card_name)';
      $res = $pdo->prepare($sql);
      $res->bindParam(':pro_no', $pro_no);
      $res->bindParam(':card_name', $card_name);
      $res->execute();
      $lastCardId = $pdo->lastInsertId();
      $sql = "insert into `person_in_charge` 
      (mem_no, card_no) values 
      (:mem_no, :card_no)";
      $join = $pdo->prepare($sql);
      $join->bindValue(':mem_no', $_SESSION["mem_no"]);
      $join->bindValue(':card_no', $lastCardId);
      $join->execute();
      // require_once('get_program.php');
      echo json_encode(['status' => 'success', 'content' => '新建卡片成功']);
    break;
    
    case "delete_card":
      $sql = "delete from `card` WHERE `card_no` = :card_no";
      $res = $pdo->prepare($sql);
      $res->bindValue('card_no', $_POST['card_no']);
      $res->execute();
    
      echo json_encode(['status' => 'success', 'content' => '刪除卡片']);
    break;
      
    case "check_dateline":
      $sql = "update `card` set card_sta = :card_sta 
      where card_no = :card_no";
      $res = $pdo->prepare($sql);
      $res->bindParam('card_sta', $_POST['card_sta']);
      $res->bindParam('card_no', $_POST['card_no']);
      $res->execute();
    
      echo json_encode(['status' => 'success', 'content' => '異動成功']);
    break;

    case "set_calendar_date":
      $sql = "update `card` set card_date = :card_date 
      where card_no = :card_no";
      $res = $pdo->prepare($sql);
      $res->bindParam('card_date', $_POST['card_date']);
      $res->bindParam('card_no', $_POST['card_no']);
      $res->execute();
    
      echo json_encode(['status' => 'success', 'content' => '異動成功']);
    break;

    case "add_todo":
      if ($data['content']) {
        foreach ($data['content'] as $info) {
          $sql = 'insert into `todo` 
            (card_no, pro_no, todo_title) values
            (:card_no, :pro_no, :todo_title)';
          $res = $pdo->prepare($sql);
          $res->bindParam(':card_no', $lastCardId);
          $res->bindParam(':pro_no', $pro_no);
          $res->bindParam(':todo_title', $info['title']);
          $res->execute();
          $lastId = $pdo->lastInsertId();
          if ($info['lists']) {
            foreach ($info['lists'] as $list) {
              $listStatus = $list['status'] ? '1' : '0';
              $isClock = $list['isClock'] ? '1' : '0';
              $sql = 'insert into `todo_content` 
                (todo_no, pro_no, card_no, todo_cont, todo_cont_sta, todo_cont_clock) values 
                (:todo_no, :pro_no, :card_no, :todo_cont, :todo_cont_sta, :todo_cont_clock)';
              $res = $pdo->prepare($sql);
              $res->bindParam(':todo_no', $lastId);
              $res->bindParam(':pro_no', $pro_no);
              $res->bindParam(':card_no', $lastCardId);
              $res->bindParam(':todo_cont', $list['content']);
              $res->bindParam(':todo_cont_sta', $listStatus);
              $res->bindParam(':todo_cont_clock', $isClock);
              $res->execute();
            }
          }
        }
      }
    break;

    case "add_file":
      // $pro_no = $_POST['pro_no'];
      // $card_no=$_POST['card_no'];
      // $todo_no = 1;   //不知道為什麼要綁這個
      // $file_name=$_POST['file_name'];
      // $file_src='';
      // $pdo->beginTransaction();
      $sql = "insert INTO `card_file` (`file_no`, `pro_no`, `card_no`, `todo_no`, `file_name`, `file_src`) values(null, :pro_no, :card_no, :todo_no, :file_name, :file_src)";
      $files = $pdo->prepare($sql);
      $files->bindValue(":pro_no", $_POST["pro_no"]);
      $files->bindValue(":card_no", $_POST["card_no"]);
      $files->bindValue(":todo_no", 0);
      $files->bindValue(":file_name", $_POST["file_name"]);
      $files->bindValue(":file_src", $_POST["file_src"]);
      $files->execute();

      //取得自動創號的key值
      $psn = $pdo->lastInsertId();

      echo json_encode(['status' => 'success', 'content' => '上傳檔案成功']);
    break;

    case "delete_file":
      $sql = "delete FROM `card_file` WHERE `card_file`.`file_no` = :file_no";
      $res = $pdo->prepare($sql);
      $res->bindValue('file_no', $_POST['file_no']);
      $res->execute();
    
      echo json_encode(['status' => 'success', 'content' => '刪除檔案']);
    break;

  }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
