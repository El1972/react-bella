<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$dsn = 'mysql:host=localhost;dbname=react_fetch';
$username = 'root';
$password = 'root';

$db = new PDO($dsn, $username, $password);

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "GET":
        $sql = "SELECT * FROM men_shoes";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[2]) && is_numeric($path[2])) {
            $sql .= "WHERE id = :id";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id', $path[2]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;
}
