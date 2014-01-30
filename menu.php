
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="en-GB" />
<link rel="stylesheet" type="text/css" href="css/menu.css">
<!-----SLIDING PANEL HEIGHT ADJUST TO DOCUMENT HEIGHT----->
<!--<script type="text/javascript">
$(document).ready(function() {
	$("#menu").height($(document).height());
});
</script>
-->
<!-----SLIDING PANEL DELAY AND HIDE----->
<script type="text/javascript">
$(document).ready(function() {
    setTimeout( function(){$('#menu').css('left','-130px');},10); <!-- Change 'left' to 'right' for panel to appear to the right -->
});
</script>

</head>

<body>

<!-----SLIDING MENU PANEL----->
<div id="menu">
	<div class="arrow"><</div>
    <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Vegetable</a>
        <a href="#">Fruit</a>
        <a href="#">Meat</a>
        <a href="#">Seafood</a>
        <a href="#">Dairy</a>
        <a href="#">Bakery</a>
		<a href="#">Pasta</a>
		<a href="#">Grocery</a>
		<a href="#">Bevrages</a>
		<a href="#">Home-needs</a>
		<a href="#">Health</a>
		<a href="#">Nutrition</a>
		<a href="#">Beauty</a>
		<a href="#">Cosmetic</a>
		<a href="#">Organic</a>
    </nav>
</div>
<!-----END SLIDING MENU PANEL----->
</body>
</html>