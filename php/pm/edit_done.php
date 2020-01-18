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
      

  }
  $jsonData = json_decode(file_get_contents('php://input'), true);
  
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
