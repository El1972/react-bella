<?php

// establishing database connection
$dsn = 'mysql:host=localhost;dbname=react_fetch';
$username = 'root';
$password = 'root';

$db = new PDO($dsn, $username, $password);

if ($db) {
    echo "connection established";
}

if (isset($_POST['submit'])) {
    $file = $_FILES['file']; // $_FILES gets all the information
    // from the 'file' that we want upload using input from the
    // form

    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];

    // separating name from its extension
    $fileExt = explode('.', $fileName);

    // getting extension and making it lowercase
    $fileActualExt = strtolower(end($fileExt));

    // which extensions are allowed and specifiying their types
    $allowed = array('jpg', 'jpeg', 'png', 'pdf');

    if (in_array($fileActualExt, $allowed)) {
        if ($fileError === 0) {
            if ($fileSize < 1000000) {
                $fileNameNew = uniqid('', true) . "." . $fileActualExt;
                $fileDestination = 'uploads/' . $fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Location: index.php?uploadsuccess");

                // inserting image in database using PDO
                $stmt = $db->prepare("INSERT INTO men_shoes(names, images) VALUES(:uname, :uimage)");
                $stmt->bindParam(':uname', $fileName);
                $stmt->bindParam(':uimage', $fileNameNew);
                $stmt->execute();
            } else {
                echo 'File is big';
            }
        } else {
            echo 'There was error';
        }
    } else {
        echo 'You can not';
    }
}
