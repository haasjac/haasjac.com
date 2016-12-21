<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include($_SERVER['DOCUMENT_ROOT'] . '/head.html'); ?>
<title>haasjac - MakerSpace</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="slideshow.js"></script>
</head>

<body style="overflow-x: hidden;">

<div id="wrapper">

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/nav.html'); ?>
	
	<section>
	
	<div class="cardHeader">
			<div class="cardHeaderTitleBox">
				<span class="cardHeaderTitle">Camp Riley</span>
			</div>
			<div class="cardHeaderDescription">
				I recreated a Makerspace based on a blog made by <a target="_blank" href="http://www.thetech.org/">The Tech</a>.
				I used <a target="_blank" href="Makerspace.pdf">this</a> "cookbook" to create a new project for the camp each week. Some projects were
				using playdoh and fruit to create circuits, making paper aircraft fly in a wind tunnel, making rockets out of construction paper, and
				making games in a program called Scratch.
			</div>
		</div>
	
	<div class="slideshow">
	    <div id="slideshowObjs"></div>
	    <div class="slideshowNav">
	        <div class="slideshowLeftArrow" onclick="slideshowMoveLeft()">&#10094;</div>
	        <div class="slideshowRightArrow" onclick="slideshowMoveRight()">&#10095;</div>
	        <div id="slideshowDots">
	            <span class="slideshowDot" onclick="slideshowGoto(0)"></span>
	            <span class="slideshowDot" onclick="slideshowGoto(1)"></span>
	            <span class="slideshowDot" onclick="slideshowGoto(2)"></span>
	            <span class="slideshowDot" onclick="slideshowGoto(3)"></span>
	            <span class="slideshowDot" onclick="slideshowGoto(4)"></span>
	            <span class="slideshowDot" onclick="slideshowGoto(5)"></span>
	        </div>
	    </div>
	</div>
	
	</section>
	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.html'); ?>
	
</div>

</body>
</html>
