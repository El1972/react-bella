<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script>
    if(window.history.replaceState){
      window.history.replaceState( null, null, window.location.href);
    }
  </script>
</head>
<body>

<form action="upload.php" method="POST" enctype="multipart/form-data">

    <label for="">Name</label><br>
    <input type="text" name="name"> varchar bill<br>

    <label for="">Image</label><br>
    <input type="file" name="file">varchar
    633299107bd847.48073824.jpeg<br>

    <label for="">Description</label><br>
    <input type="text" name="description"> varchar mnbmnbmnb<br>

    <label for="">Code</label><br>
    <input type="text" name="code"> varchar 564<br>

    <label for="">Leather</label><br>
    <input type="text" name="leather"> int 1<br>

    <label for="">Laces</label><br>
    <input type="text" name="laces"> int 1<br>

    <label for="">Count</label><br>
    <input type="text" name="count"> int 1<br>

    <label for="">Amount</label><br>
    <input type="text" name="amount"> int 1<br>

    <label for="">Price</label><br>
    <input type="text" name="price"> varchar 258.99<br>

    <label for="">Discount</label><br>
    <input type="text" name="discount"> int 0<br>

    <label for="">Bestseller</label><br>
    <input type="text" name="bestseller"> varchar mnbmnb<br>

    <label for="">Us</label><br>
    <input type="text" name="us"> varchar mbmn<br>

    <label for="">Uk</label><br>
    <input type="text" name="uk"> varchar nbm<br>

    <label for="">Eu</label><br>
    <input type="text" name="eu"> varchar khkj<br>

    <label for="">Color</label><br>
    <input type="text" name="color"> varchar black<br>

    <label for="">Designer</label><br>
    <input type="text" name="designer"> varchar mbmnb<br>

    <label for="">Stock</label><br>
    <input type="text" name="stock"> int 10<br>

    <!-- <label for="">Image</label><br>
    <input type="file" name="file">varchar
    633299107bd847.48073824.jpeg<br>

    <label for="">Article</label><br>
    <input type="text" name="article"> varchar mnbmnbmnb<br> -->

    <input type="submit" name="submit" value="submit"><br>
</form>

<script src="./script.js"></script>
</body>
</html>
