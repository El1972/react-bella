<?php

header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Content-Type: application/json");

$dsn = 'mysql:host=localhost;dbname=react_fetch';
$username = 'root';
$password = 'root';

$db = new PDO($dsn, $username, $password);

$path = explode('/', $_SERVER['REQUEST_URI']);
$id = $path[2];
$sql = "SELECT * FROM women_shoes WHERE id = ?";
$stmt = $db->prepare($sql);
$stmt->bindParam(1, $id);
$stmt->execute();
$women_shoes = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($women_shoes);
