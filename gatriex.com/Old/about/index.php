<html>


<!-- HEAD - CONTAINS SCRIPTS PHP TITLE AND FILE LINKS -->
<head>
<title>Gatriex: About</title>
<?php include($_SERVER['DOCUMENT_ROOT'] . '/head.html'); ?>
</head>


<!--START BODY-->
<body onLoad="onStartupAbout()">

<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.html'); ?>




<!-- TABLE CONTAINING MAIN CONTENT -->
<main>
<table id="main">
<tr>


<!-- NAVIGATION - CONTAINS CATEGORY divS WITH HYPERTEXT LINKS -->
<td id="navcell" rowspan="2">
<nav>
Your bookmarks are on the left which can easily be edited and categorized.<br>
</nav>
<!--<nav>
<button id="navButton1" onClick="setButtons(1)"></button><br />
<span id="NavCat1" style="display:none"></span>
<br />
<button id="navButton2" onClick="setButtons(2)"></button><br />
<span id="NavCat2" style="display:none"></span>
<br />
<button id="navButton3" onClick="setButtons(3)"></button><br />
<span id="NavCat3" style="display:none"></span>
<br />
<button id="navButton4" onClick="setButtons(4)"></button><br />
<span id="NavCat4" style="display:none"></span>
<br />
<button id="navButton5" onClick="setButtons(5)"></button><br />
<span id="NavCat5" style="display:none"></span>
</nav>-->
</td>


<!-- SECTION - CONTAINS STATUS, SEARCH, AND LEAGUE INFO -->

<td id="searchcell">
<section>
<span>
The middle section uses Riot's API to show you the division and LP of any summoner.<br>
<br>
<br>
Gatriex is a website which was designed to be a Home Page with heavy League of Legends influence.<br>
<br />
Contact me with comments, questions, or concerns at: <a href="mailto:gatriex@gmail.com" target="_blank" class="style1">gatriex@gmail.com</a>
<br />
</span>
<br />
</section>
</td>
</td>


<td id="statuscell">
On the right, the League of Legends server status of your chosen region, also created through Riot's API.
<!--<div id="Status" style="display:inline; text-transform:capitalize"></div>
<div id="Incidents" style="display:inline"></div>-->
</td></tr>
</table>
</main>

<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.html'); ?>

</body>
</html>
