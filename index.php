<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include($_SERVER['DOCUMENT_ROOT'] . '//head.html'); ?>
<script src="https://code.createjs.com/easeljs-0.8.1.min.js"></script>
<script src="https://code.createjs.com/tweenjs-0.6.1.min.js"></script>
<script src="home.js"></script>
<title>haasjac</title>
</head>

<body">

<!--<header>
This is my portfolio.
</header>-->

<?php include($_SERVER['DOCUMENT_ROOT'] . '/nav.html'); ?>

<section>
<canvas id="Canvas" width="1000" height="500" ></canvas>
<div style="text-align: center; width:1000px;">
<!--<img  height="400px" width="548px;" src="/haasjac/Logo_name.png" />-->
<br>
<!--<span style="font-family: Geneva, Arial, Helvetica, sans-serif" class="title">
<span style="font-size:16px;" >Programmer | Developer | Gamer</span>
</span>
<br><br>-->
Click anywhere in the box!<br>
<button onClick="init()">Reset</button>
</div>
</section>

<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.html'); ?>

</body>
</html>
