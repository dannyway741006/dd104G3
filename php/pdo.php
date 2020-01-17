<?php
  $dsn = 'mysql:host=localhost;post=3306;dbname=dd104g3;charset=utf8';
  $option = array([PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
  $pdo = new PDO($dsn, 'root', 'root');