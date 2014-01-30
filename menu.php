
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="en-GB" />
<link rel="stylesheet" type="text/css" href="css/menu.css">
<!-----SLIDING PANEL HEIGHT ADJUST TO DOCUMENT HEIGHT----->
<script type="text/javascript">
$(document).ready(function() {
	$("#menu").height($(document).height());
});
</script>

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
        <a href="#">An introduction: Design in 2012</a>
        <a href="#">Relevant figures in design</a>
        <a href="#">Where is design heading?</a>
        <a href="#">Influences</a>
        <a href="#">Video</a>
        <a href="#">Sources</a>
		<a href="#">Swami</a>
		<a href="#">Bala</a>
    </nav>
</div>
<!-----END SLIDING MENU PANEL----->
</body>
</html>