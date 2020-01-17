<?php
  try{
    require_once('../pdo.php');
    $sql = "select p.pro_no, pro_col, card_no, card_name, card_date, card_type, card_sta 
    FROM `card` c 
    JOIN `member` m on (m.mem_no = :mem_no) 
    JOIN `program` p on (c.pro_no = p.pro_no AND p.mem_no = m.mem_no) 
    WHERE card_date BETWEEN CURDATE() AND DATE_ADD(CURDATE() , INTERVAL 7 DAY) AND card_sta = 0";
    $res = $pdo->prepare($sql);
    $res->bindParam('mem_no', $_POST['mem_no']);
    $res->execute();
    if($res->rowCount()){
      $nowDate = (int)date("d");
      $month_days  = cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
      $dateList = [
        '0'=>[],
        '1'=>[],
        '2'=>[],
        '3'=>[],
        '4'=>[],
        '5'=>[],
        '6'=>[]
      ];
      $cards = $res->fetchAll(PDO::FETCH_ASSOC);
      foreach($cards as $card){
        $datetime = new DateTime($card['card_date']);
        $cardDate = (int)$datetime->format('d');
        $range = $cardDate - $nowDate < 0 ? $cardDate - $nowDate + $month_days : $cardDate - $nowDate;
        $dateList[$range][] = $card;
      }
      echo json_encode(['status' => 'success', 'data' => $dateList]);
    }else {
      echo json_encode(['status' => 'error', 'content' => '沒有資料']);
    }
  }catch(PDOException $e){
    echo $e->getLine();
    echo $e->getMessage();
  }