<?php
try {
  require_once('../pdo.php');
  session_start();
  $_SESSION['mem_no'] = 1;//test
  //讀取text/xml檔案
  switch($_POST['type'])
  {
    case "add_file":
      $pro_no = $_POST['pro_no'];
      $pdo->beginTransaction();

      $sql = "INSERT INTO `card_file` (`file_no`, `pro_no`, `card_no`, `todo_no`, `file_name`, `file_src`) values(null, :pro_no, :card_no, :todo_no, :file_name, :file_src)";
				$files = $pdo->prepare( $sql );
				$files -> bindValue(":pro_no", $_POST["pname"]);
				$files -> bindValue(":card_no", $_POST["price"]);
				$files -> bindValue(":todo_no", $_POST["author"]);
        $files -> bindValue(":file_name", $_POST["pages"]);
        
				$files -> execute();

				//取得自動創號的key值
				$psn = $pdo->lastInsertId();

  }
  $jsonData = json_decode(file_get_contents('php://input'), true);
  
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
