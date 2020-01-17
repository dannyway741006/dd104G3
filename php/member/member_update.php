<?php

require_once('../mem_connect.php');

try{
  //第二次進入本程式
    $sql = "update `member` set mem_tel=:mem_tel, 
    mem_email=:mem_email, 
    mem_name=:mem_name,mem_addr=:mem_addr
        where mem_no=:mem_no";
    $products = $pdo->prepare( $sql );
    $products->bindValue(":mem_no", $_POST["mem_no"]);
    $products->bindValue(":mem_tel", $_POST["mem_tel"]);
    $products->bindValue(":mem_email", $_POST["mem_email"]);
    $products->bindValue(":mem_name", $_POST["mem_name"]);
    $products->bindValue(":mem_addr", $_POST["mem_addr"]);

    $products->execute();    
  
  
}catch(PDOException $e){
  $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
  $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
} 
?>  