<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");

$dsn = 'mysql:host=localhost;dbname=react_fetch';
$username = 'root';
$password = 'root';

$db = new PDO($dsn, $username, $password);

// if ($db) {
//     echo "connection established";
// }

$description = "SELECT * FROM descriptions";

$statement = $db->prepare($description);

$statement->execute();

$descriptions = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($descriptions);
