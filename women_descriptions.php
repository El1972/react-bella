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

$women_description = "SELECT * FROM women_descriptions";

$statement = $db->prepare($women_description);

$statement->execute();

$women_descriptions = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($women_descriptions);
