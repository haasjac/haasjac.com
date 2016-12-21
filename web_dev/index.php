<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include($_SERVER['DOCUMENT_ROOT'] . '/head.html'); ?>
<title>haasjac - Web Dev</title>
</head>

<body>

<div id="wrapper">

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/nav.html'); ?>
	
	<section>
	
		<div class="cardHeader">
			<div class="cardHeaderTitleBox">
				Personal Work
			</div>
			<div class="cardHeaderDescription">
				The following projects serve to further my understanding of web development and showcase my software projects.			
			</div>
		</div>
	
		<div class="cardArea" >
			<div class="card">
				<img class="cardImage" src="/Logo.png" />
				<div class="cardText">
					<span class="cardTitle">haasjac</span>
					<div class="cardDescription">This is my portfolio site for showing off my software projects.</div>
					<div class="cardLinks">
						<a class="cardLinkLeft" target="_blank" href="https://github.com/haasjac/haasjac.com">Github</a>
						<a class="cardLinkRight" target="_blank" href=""></a>
					</div>
				</div>
			</div>
			<div class="card">
				<img class="cardImage" src="gatriex.png" />
				<div class="cardText">
					<span class="cardTitle">Gatriex</span>
					<div class="cardDescription">Gatriex is a site I've had since I started web development. I add to it when I want to learn something new.</div>
					<div class="cardLinks">
						<a class="cardLinkLeft" target="_blank" href="https://github.com/haasjac/haasjac.com/tree/master/gatriex.com">Github</a>
						<a class="cardLinkRight" target="_blank" href="http://gatriex.com/">Website</a>
					</div>
				</div>
			</div>
		</div>
		
		<div class="cardHeader">
			<div class="cardHeaderTitleBox">
				Professional Work
			</div>
			<div class="cardHeaderDescription">
				I served as the Webmaster and Vice President of WolverineSoft the game development club at the University of Michigan. I collaborated with a partner to create a new website for the club.
			</div>
		</div>
		
		<div class="cardArea">
			<div class="card">
				<img class="cardImage" src="wsoft.png" />
				<div class="cardText">
					<span class="cardTitle">WolverineSoft</span>
					<div class="cardDescription">WolverineSoft's website hosts game jam games and informs members of upcoming events and game design resources.</div>
					<div class="cardLinks">
						<a class="cardLinkLeft" target="_blank" href=""></a>
						<a class="cardLinkRight" target="_blank" href="http://www.wolverinesoft.org/">Website</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.html'); ?>
</div>

</body>
</html>