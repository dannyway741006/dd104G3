<?php
$dsn = 'mysql:host=localhost;post=3306;dbname=dd104g3;charset=utf8';
$options = array([PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$pdo = new PDO($dsn, 'ezey', 't8me',$options);

?>
