<?php

// establishing database connection
$dsn = 'mysql:host=localhost;dbname=react_fetch';
$username = 'root';
$password = 'root';

$db = new PDO($dsn, $username, $password);

if ($db) {
    echo "connection established";
}

//                    VERY IMPORTANT !!!

// !!! Make sure you enter correct value types according to the
// types that are in the database's structure, when you are filling
// out the fields to be entered into a database. For example you
// can't enter a word into a field with (INT) in it as a value.
// It'll require a number in order to be accepted and displayed,
// and vice versa !!!

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $file = $_FILES['file']; // $_FILES gets all the information
    // from the 'file' that we want upload using input from the
    // form

    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileSize = $_FILES['file']['size'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];
    $description = $_POST['description'];
    $code = $_POST['code'];
    $leather = $_POST['leather'];
    $laces = $_POST['laces'];
    $count = $_POST['count']; // taken word, that's why it's plural
    $amount = $_POST['amount'];
    $price = $_POST['price'];
    $discount = $_POST['discount'];
    $bestseller = $_POST['bestseller'];
    $us = $_POST['us'];
    $uk = $_POST['uk'];
    $eu = $_POST['eu'];
    $color = $_POST['color'];
    $designer = $_POST['designer'];
    $stock = $_POST['stock'];

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
                $stmt = $db->prepare("INSERT INTO women_shoes
                (names, images, descriptions, code, leather,
                laces, count, amount, prices,
                discounts, bestsellers, us, uk, eu, colors,
                designers, stock)
                VALUES
                (:name, :image, :description, :code, :leather,
                :laces, :count, :amount, :price,
                :discount, :bestseller, :us, :uk, :eu, :color,
                :designer, :stock)");

                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':image', $fileNameNew);
                $stmt->bindParam(':description', $description);
                $stmt->bindParam(':code', $code);
                $stmt->bindParam(':leather', $leather);
                $stmt->bindParam(':laces', $laces);
                $stmt->bindParam(':count', $count);
                $stmt->bindParam(':amount', $amount);
                $stmt->bindParam(':price', $price);
                $stmt->bindParam(':discount', $discount);
                $stmt->bindParam(':bestseller', $bestseller);
                $stmt->bindParam(':us', $us);
                $stmt->bindParam(':uk', $uk);
                $stmt->bindParam(':eu', $eu);
                $stmt->bindParam(':color', $color);
                $stmt->bindParam(':designer', $designer);
                $stmt->bindParam(':stock', $stock);
                $stmt->execute();

                // $stmt = $db->prepare("INSERT INTO random_items
                // (images, articles)
                // VALUES
                // (:image, :article)");

                // $stmt->bindParam(':image', $fileNameNew);
                // $stmt->bindParam(':article', $article);
                // $stmt->execute();
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
