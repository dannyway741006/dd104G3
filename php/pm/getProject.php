<?php
try {
  require_once('../pdo.php');
  $sql = "select c.card_no, c.pro_no, card_name, DATE_FORMAT(`card_date`, '%Y-%m-%d %H:%i') AS `card_date`, card_type, card_sta, t.todo_no, todo_title, file_no, file_name, file_src, todo_cont_no, todo_cont, todo_cont_sta, todo_cont_clock, todo_timer 
  from `card` c
  LEFT JOIN `todo` t on c.pro_no = t.pro_no AND c.card_no = t.card_no 
  LEFT JOIN `card_file` f on f.pro_no = c.pro_no AND f.card_no = c.card_no 
  LEFT JOIN `todo_content` tc on tc.pro_no = c.pro_no AND tc.todo_no = t.todo_no 
  WHERE c.pro_no = :pro_no 
  order by c.card_no";
  $res = $pdo->prepare($sql);
  $res->bindParam(':pro_no', $_POST['pro_no']);
  $res->execute();
  if ($res->rowCount()) {
    $cards = $res->fetchAll(PDO::FETCH_ASSOC);
    $step0 = array();
    $step1 = array();
    $step2 = array();
    $prevCardId = null;
    $prevTodoId = null;
    foreach ($cards as $card) {
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
