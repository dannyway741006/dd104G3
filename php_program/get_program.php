<?php
session_start();
$_SESSION['mem_no'] = 1;//test
try {
  require_once('./connect.php');
  $sql = "select c.card_no, c.pro_no, jp.pro_mem_no_string, card_name, pic.card_mem_no_string, DATE_FORMAT(`card_date`, '%Y-%m-%d %H:%i') AS `card_date`, card_type, card_sta, t.todo_no, todo_title, file_no, file_name, file_src, todo_cont_no, todo_cont, todo_cont_sta, todo_cont_clock, todo_timer 
  from `dd104g3`.`card` c
  LEFT JOIN `dd104g3`.`todo` t on c.pro_no = t.pro_no AND c.card_no = t.card_no 
  LEFT JOIN `dd104g3`.`card_file` f on f.pro_no = c.pro_no AND f.card_no = c.card_no 
  LEFT JOIN `dd104g3`.`todo_content` tc on tc.pro_no = c.pro_no AND tc.todo_no = t.todo_no 
  LEFT JOIN ( SELECT `join_program`.`pro_no`, 
              GROUP_CONCAT(`join_program`.`mem_no`) AS 'pro_mem_no_string' 
              FROM `dd104g3`.`join_program` 
              WHERE `join_program`.`pro_mem_inv` = 1 
              GROUP BY `join_program`.`pro_no`) jp 
  ON c.pro_no = jp.pro_no
  LEFT JOIN ( SELECT `person_in_charge`.`card_no`, 
              GROUP_CONCAT(`person_in_charge`.`mem_no`) AS 'card_mem_no_string' 
              FROM `dd104g3`.`person_in_charge` 
              GROUP BY `person_in_charge`.`card_no`) pic 
  ON c.card_no = pic.card_no  
  WHERE c.pro_no = :pro_no
  order by c.card_no";
  $res = $pdo->prepare($sql);
  $res->bindParam(':pro_no', $_POST['pro_no']);
  $res->execute();
  if ($res->rowCount()) {
    $cards = $res->fetchAll(PDO::FETCH_ASSOC);
    $step0 = array("cards" => array(), "type" => "card_list_todo"); //card_list_todo
    $step1 = array("cards" => array(), "type" => "card_list_doing"); //card_list_doing
    $step2 = array("cards" => array(), "type" => "card_list_done"); //card_list_done
    $prevCardId = null;
    $prevTodoId = null;
    $todo_no_arr = array();
    $todo_con_no_arr = array();
    foreach ($cards as $card) {
      switch($card['card_type'])
      {
        case "0":
          if(isset($step0["cards"][$card['card_no']]) == true)
          {
            if($card['todo_cont'] != NULL)
            {
              $step0["cards"][$card['card_no']]['todo_list_content_detail'][$card['todo_no']]['title'] = $card['todo_title'];
              if($card['todo_title'] != NULL)
              {
                array_push($step0["cards"][$card['card_no']]['todo_list_content_detail'][$card['todo_no']]['lists'], array("content" => $card['todo_cont'], "status" => (int)$card['todo_cont_sta'], "status" => (int)$card['todo_cont_sta'], "text" => (int)$card['todo_cont_sta']));
              }
              $step0["cards"][$card['card_no']]['todo_list_content_detail'][$card['todo_no']]['showname'] = false;
              $step0["cards"][$card['card_no']]['todo_list_content_detail'][$card['todo_no']]['test_title_name'] = true;
              $step0["cards"][$card['card_no']]['todo_list_content_detail'][$card['todo_no']]['test'] = '';
          }else{
            $pro_member_arr = explode(',',$card["pro_mem_no_string"]);
            $card_member_arr = explode(',',$card["card_mem_no_string"]);
            if($card['todo_cont'] != NULL)
            {
              $todo_list_content_detail_arr[0]['title'] = $card['todo_title'];
              if($card['todo_title'] != NULL)
              {
                $todo_list_content_detail_arr[0]['lists'][0] = array("content" => $card['todo_cont'], "status" => (int)$card['todo_cont_sta'], "status" => (int)$card['todo_cont_sta'], "text" => (int)$card['todo_cont_sta']);
              }else{
                $todo_list_content_detail_arr[0]['lists'] = [];
              }
              $todo_list_content_detail_arr[0]['showname'] = false;
              $todo_list_content_detail_arr[0]['test_title_name'] = true;
              $todo_list_content_detail_arr[0]['test'] = '';
            }else{
              $todo_list_content_detail_arr = [];
            }
            
            
            $step0["cards"][$card['card_no']] = array("card_no"=> $card['card_no'], 
            "card_name"=> $card['card_name'], 
            "card_member" => $pro_member_arr, 
            "showhideMember" => false, 
            "member_input" => "", 
            "member_inout" => $card_member_arr, 
            "todo_list_content_detail" => $todo_list_content_detail_arr, 
            "dateline" => false, 
            "dateline_text" => "未完成", 
            "calendar_date" => "未設定", 
            "filebox" => array(), 
            "file_switch" => false);
          }
          
          if($todo_no_arr[$card['card_no']] && $todo_con_no_arr)
          {
            array_push($step0["cards"][$todo_no_arr[$card['card_no']]]['todo_list_content_detail'], array('title'=>$card['todo_title'], 'lists' => array()));
          }else{
            array_push($step0["cards"],array("card_no"=> $card['card_no'], 
            "card_name"=> $card['card_name'], 
            "card_member" => $pro_member_arr, 
            "showhideMember" => false, 
            "member_input" => "", 
            "member_inout" => $card_member_arr, 
            "todo_list_content_detail" => [], 
            "dateline" => false, 
            "dateline_text" => "未完成", 
            "calendar_date" => "未設定", 
            "filebox" => [], 
            "file_switch" => false));
            $todo_no_arr[$card['card_no']] = count($step0["cards"])-1;
          }
          
          break;
        case "1":
          array_push($step1["cards"],array("card_name"=> $card['card_name'], "card_member" => array(), "showhideMember" => false, "member_input" => "", "member_inout" => [], "todo_list_content_detail" => [], "dateline" => false, "dateline_text" => "未完成", "calendar_date" => "未設定", "filebox" => [], "file_switch" => false));
          break;
        case "2":
          array_push($step2["cards"],array("card_name"=> $card['card_name'], "card_member" => array(), "showhideMember" => false, "member_input" => "", "member_inout" => [], "todo_list_content_detail" => [], "dateline" => false, "dateline_text" => "未完成", "calendar_date" => "未設定", "filebox" => [], "file_switch" => false));
          break;
        default:
          break;
      }
      $contentList = [
        'content' => $card['todo_cont'],
        'id' => $card['todo_cont_no'],
        'status' => $card['todo_cont_sta'] ? true : false,
        'isClock' => $card['todo_cont_clock'] ? true : false,
        'timer' => $card['todo_timer']
      ];
      $content = [
        'title' => $card['todo_title'],
        'id' => $card['todo_no'],
        'lists' => $card['todo_cont_no'] ? [$contentList] : []
      ];
      $file = [
        'id' => $card['file_no'],
        'name' => $card['file_name'],
        'src' => $card['file_src']
      ];
      $info = [
        'content' => $card['todo_no'] ? [$content] : [],
        'files' => $card['file_no'] ? [$file] : [],
        'id' => $card['card_no'],
        'status' => $card['card_sta'] ? true : false,
        'title' => $card['card_name'],
        'deadLine' => $card['card_date']
      ];
      switch ($card['card_type']) {
        case '0':
          if ($card['card_no'] === $prevCardId) {
            $lastIndex = count($step0) - 1;
            if ($card['todo_no'] === $prevTodoId) {
              $step0[$lastIndex]['content'][count($step0[$lastIndex]['content']) - 1]['lists'][] = $contentList;
            } else {
              $step0[$lastIndex]['content'][] = $content;
            }
            if($card['file_no'])$step0[$lastIndex]['files'][] = $file;
          } else {
            $step0[] = $info;
          }
          break;
        case '1':
          if ($card['card_no'] === $prevCardId) {
            $lastIndex = count($step1) - 1;
            if ($card['todo_no'] === $prevTodoId) {
              $step1[$lastIndex]['content'][count($step1[$lastIndex]['content']) - 1]['lists'][] = $contentList;
            } else {
              $step1[$lastIndex]['content'][] = $content;
            }
            if($card['file_no'])$step0[$lastIndex]['files'][] = $file;
          } else {
            $step1[] = $info;
          }
          break;
        default;
          if ($card['card_no'] === $prevCardId) {
            $lastIndex = count($step2) - 1;
            if ($card['todo_no'] === $prevTodoId) {
              $step2[$lastIndex]['content'][count($step2[$lastIndex]['content']) - 1]['lists'][] = $contentList;
            } else {
              $step2[$lastIndex]['content'][] = $content;
            }
            if($card['file_no'])$step0[$lastIndex]['files'][] = $file;
          } else {
            $step2[] = $info;
          }
      }
      $prevCardId = $card['card_no'];
      $prevTodoId = $card['todo_no'];
    }
    echo json_encode(['status' => 'success', 'data' => array($step0, $step1, $step2)], JSON_NUMERIC_CHECK);
  } else {
    echo json_encode(['status' => 'error', 'content' => '沒有資料']);
  }
} catch (PDOException $e) {
  echo $e->getLine();
  echo $e->getMessage();
}
