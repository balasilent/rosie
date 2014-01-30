<?PHP include "header.php"; ?>
	<html xmlns="http://www.w3.org/1999/xhtml">
	 
	<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="en-GB" />
	<title>Vertical Sliding Info Panel With jQuery</title>
		<link rel="stylesheet" type="text/css" href="css/sliding.css" media="screen">
	    <link rel="stylesheet" href="css/button.css" type="text/css" >
	<script type="text/javascript" src="js/script.js"></script>
	 
	<script type="text/javascript">
	
	$(document).ready(function(){
	    $(".trigger").click(function(){
	        $(".panel").toggle("fast");
	        $(this).toggleClass("active");
	        return false;
	    });
	});
	function increment_onclick() 
	{
		 var x=parseInt(document.getElementById("Text1").value);
		 x=x+1;
		 Text1.value=x;

		
	}

	function decrement_onclick() 
	{
		 var x=parseInt(document.getElementById("Text1").value);
		 x=x-1;
		 Text1.value=x;

	}

	</script>
	</head>

<body>
<div id="container">

    
</div>
<div class="panel">
<div style="clear:both;"></div>
	<p><input id="increment" style="background-image: url('img/up.png'); height: 30px; width:30px;" type="button" onclick="return increment_onclick()" align="right" />
	<p><input id="Text1" type="text" value="0" />
	<p><input id="decrement" style="background-image: url('img/dwn.png'); height: 30px; width: 30px;" type="button" onclick="return decrement_onclick()" align="middle" />
	<div style="clear:both;"></div>

<div class="colleft">
<div style="clear:both;"></div>
	<div align="left">
	<input id="gobutton" type="submit" value="Proceed" align="left" />
		</div>
		</div>
		<div class="colright">
<div style="clear:both;"></div>
		<div align="right">
	<input id="gobutton" type="submit" value="Checkout" align="right" />
	</div>
    </div>


 

</div>
<div style="clear:both;"></div>
	 
</div>
<a class="trigger" href="#">Cart</a>
</body>
</html>