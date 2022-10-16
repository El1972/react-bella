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

$query = "SELECT * FROM random_items";

$statement = $db->prepare($query);

$statement->execute();

$random = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($random);
