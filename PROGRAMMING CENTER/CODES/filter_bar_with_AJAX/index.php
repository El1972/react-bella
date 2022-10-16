
<?php
$minimum_range = 1000;
$maximum_range = 6000;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <div class="container">
                <br />
                <br />
                <br />
                <h3 align="center">Make Price Range Slider using JQuery with PHP Ajax</a></h3><br />
                <br />
                <div class="row">

                    <div class="col-md-2">
                        <input type="text" name="minimum_range" id="minimum_range"
                        class="form-control" value="<?php echo $minimum_range; ?>" />
                    </div>

                    <div class="col-md-8" style="padding-top:12px">
                        <div id="price_range"></div>
                    </div>

                    <div class="col-md-2">
                        <input type="text" name="maximum_range" id="maximum_range"
                        class="form-control" value="<?php echo $maximum_range; ?>" />
                    </div>


                </div>
                <br />
                <div id="load_product"></div>
            <br />
    </div>


<script src="./script.js"></script>
</body>
</html>
<script>


// Steps:
// 1 - Create Ajax POST request to the server. Get data from the server
// 2 - Create slider with the slider() method, read values, and call function,
//      inside the slider() method, that handles Ajax request, receives data
//      from the server. And then substitute value parameters of the slider
//      in it


// 3 - display range filter bar, read values of it and substitute those values
//     as parameters in it
$(document).ready(function(){
	$( "#price_range" ).slider({
		range: true,
		min: 1000,
		max: 6000,
		values: [ <?php echo $minimum_range; ?>, <?php echo $maximum_range; ?> ],
		slide:function(event, ui){
			$("#minimum_range").val(ui.values[0]);
			$("#maximum_range").val(ui.values[1]);
			load_product(ui.values[0], ui.values[1]); // substitute parameters
		}
	});


    // 1
	function load_product(minimum_range, maximum_range)
	{
		$.ajax({
			url:"./upload.php",
			method:"POST",
			data:{
                minimum_range: minimum_range,
                maximum_range: maximum_range
            },
			success:function(data) // it'll receive data from server. We fetch it
			{
                console.log(data);
				$('#load_product').fadeIn('slow').html(data);
			}
		});
	}

    load_product(<?php echo $minimum_range; ?>, <?php echo $maximum_range; ?>);


});
</script>

