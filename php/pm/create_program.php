<?php
  session_start();
  try{
    require_once('../pdo.php');
    $sql = 'insert into `program` (mem_no,  pro_col, pro_title) values (:mem_no, :pro_col, :pro_title)';
    $res = $pdo->prepare($sql);

    $_SESSION['mem_no'] = 1;//-----------------------------
    $res->bindValue(':mem_no', $_SESSION['mem_no']);
    $res->bindValue(':pro_col', $_POST['pro_col']);
    $res->bindValue(':pro_title', $_POST['pro_title']);
    $res->execute();
    $lastId = $pdo->lastInsertId();

    //
    $sql = "insert into `join_program` (mem_no, pro_no) values( ?, $lastId)";
    $join = $pdo->prepare( $sql );
    $join->bindValue(1, $_SESSION["mem_no"]);
    $join->execute();

    echo $lastId;
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }