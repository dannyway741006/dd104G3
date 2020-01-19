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
            $sql = "delete FROM `card` WHERE `card_no` = :card_no";
            $res = $pdo->prepare($sql);
            $res->bindValue('card_no', $_POST['card_no']);
            $res->execute();

            echo json_encode(['status' => 'success', 'content' => '刪除卡片']);
            break;

        case "update_card":

            break;

        case "add_todo":
            $sql = 'insert into `todo` 
          ( `todo_no`,`pro_no`,`card_no`,`todo_title`
          ) values 
          (null ,:pro_no, :card_no, :todo_title)';
            $todos = $pdo->prepare($sql);
            $todos->bindValue(":pro_no", $_POST["pro_no"]);
            $todos->bindValue(":card_no", $_POST["card_no"]);
            $todos->bindValue(":todo_title", $_POST["todo_title"]);
            $todos->execute();
            echo json_encode(['status' => 'success', 'content' => '更新待辦事項成功']);
            $todos_id = $pdo->lastInsertId();


            break;
        case "delete_todo":

            $sql = "delete FROM `todo` WHERE `todo_no` = :todo_no";
            $res = $pdo->prepare($sql);
            $res->bindValue(':todo_no', $_POST["todo_no"]);
            $res->execute();
            echo json_encode(['status' => 'success', 'content' => '刪除代辦事項']);
            break;

        case "add_todo_content":
            $sql = 'insert into `todo_content` 
              (`todo_cont_no`,`pro_no`,`card_no`,`todo_no`,`todo_cont`,`todo_cont_sta`,`todo_timer`,`todo_cont_clock`
              ) values 
              (null ,:pro_no, :card_no, :todo_no, :todo_cont, :todo_cont_sta, :todo_timer, :todo_cont_clock)';
            $todos = $pdo->prepare($sql);
            $todos->bindValue(":pro_no", $_POST["pro_no"]);
            $todos->bindValue(":card_no", $_POST["card_no"]);
            $todos->bindValue(":todo_no", $_POST["todo_no"]);
            $todos->bindValue(":todo_cont", $_POST["todo_cont"]);
            $todos->bindValue(":todo_cont_sta", 0);
            $todos->bindValue(":todo_timer", 10);
            $todos->bindValue(":todo_cont_clock", 0);
            $todos->execute();
            echo json_encode(['status' => 'success', 'content' => '更新待辦事項成功']);


            break;

            case "delete_todo_content":

                $sql = "delete FROM `todo_content` WHERE `todo_cont_no` = :todo_cont_no";
                $res = $pdo->prepare($sql);
                $res->bindValue(':todo_cont_no', $_POST["todo_cont_no"]);
                $res->execute();
                echo json_encode(['status' => 'success', 'content' => '刪除待辦事項子項目']);
                break;

        case "add_file":
            // $pro_no = $_POST['pro_no'];
            // $card_no=$_POST['card_no'];
            // $todo_no = 1;   //不知道為什麼要綁這個
            // $file_name=$_POST['file_name'];
            // $file_src='';
            // $pdo->beginTransaction();
            $sql = "insert into `card_file` (`file_no`, `pro_no`, `card_no`, `todo_no`, `file_name`, `file_src`) values(null, :pro_no, :card_no, :todo_no, :file_name, :file_src)";
            $files = $pdo->prepare($sql);
            $files->bindValue(":pro_no", $_POST["pro_no"]);
            $files->bindValue(":card_no", $_POST["card_no"]);
            $files->bindValue(":todo_no", 0);
            $files->bindValue(":file_name", $_POST["file_name"]);
            $files->bindValue(":file_src", $_POST["file_src"]);
            $files->execute();

            //取得自動創號的key值
            $file_id = $pdo->lastInsertId();

            echo json_encode(['status' => 'success', 'content' => '上傳檔案成功', $files]);
            break;
    }
} catch (PDOException $e) {
    echo $e->getLine();
    echo $e->getMessage();
}
