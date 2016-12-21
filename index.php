<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include($_SERVER['DOCUMENT_ROOT'] . '/head.html'); ?>
<script src="https://code.createjs.com/easeljs-0.8.1.min.js"></script>
<script src="https://code.createjs.com/tweenjs-0.6.1.min.js"></script>
<script src="home.js"></script>
<title>haasjac</title>
</head>

<body>

<div id="wrapper">
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/nav.html'); ?>
	
	<section>
	
		<canvas id="Canvas" width="1000" height="500" ></canvas>
		
		<div class="welcome">
		<div class="cardHeader" style="text-align: center;">
			<div class="cardHeaderTitleBox">
				<span class="cardHeaderTitle">Welcome</span>
			</div>
			<div class="cardHeaderDescription">
				Click anywhere in the box!<br><br>
				<button onClick="init()">Reset</button>
			</div>
		</div>
		</div>

	</section>
	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.html'); ?>
</div>

</body>
</html>
