<html>

<head>
<title>Gatriex</title>
<?php include($_SERVER['DOCUMENT_ROOT'] . '/head.html'); ?>
</head>


<!--START BODY-->
<body onLoad="onStartupHome()">
<div id="test"></div>
<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.html'); ?>


<!-- TABLE CONTAINING MAIN CONTENT -->
<main>
<table id="main">
<tr>


<!-- NAVIGATION - CONTAINS CATEGORY divS WITH HYPERTEXT LINKS -->
<td id="navcell" rowspan="2">
<nav>
<button id="navButton0" style="display:none" onClick="setButtons(0)"></button><br />
<span id="NavCat0" style="display:none"></span>
<br />
<button id="navButton1" style="display:none" onClick="setButtons(1)"></button><br />
<span id="NavCat1" style="display:none"></span>
<br />
<button id="navButton2" style="display:none" onClick="setButtons(2)"></button><br />
<span id="NavCat2" style="display:none"></span>
<br />
<button id="navButton3" style="display:none" onClick="setButtons(3)"></button><br />
<span id="NavCat3" style="display:none"></span>
<br />
<button id="navButton4" style="display:none" onClick="setButtons(4)"></button><br />
<span id="NavCat4" style="display:none"></span>
<br />
<button id="navButton5" style="display:none" onClick="setButtons(5)"></button><br />
<span id="NavCat5" style="display:none"></span>
<br />
<button id="navButton6" style="display:none" onClick="setButtons(6)"></button><br />
<span id="NavCat6" style="display:none"></span>
<br />
<button id="navButton7" style="display:none" onClick="setButtons(7)"></button><br />
<span id="NavCat7" style="display:none"></span>
<br />
<button id="navButton8" style="display:none" onClick="setButtons(8)"></button><br />
<span id="NavCat8" style="display:none"></span>
<br />
<button id="navButton9" style="display:none" onClick="setButtons(9)"></button><br />
<span id="NavCat9" style="display:none"></span>
</nav>
</td>


<!-- SECTION - CONTAINS STATUS, SEARCH, AND LEAGUE INFO -->

<td id="searchcell">
<!-- SEARCH-->
<div id="Search"></div>
<br>
<img id="SummonerIcon">
<div id="SummonerName"></div>
<div id="League"></div>
<div id="MiniSeries"></div>
<div id="DefaultButton"></div>
<div id="Error"></div>
</td>
</td>


<td id="statuscell">
<div id="Status" style="display:inline; text-transform:capitalize"></div>
<div id="Incidents" style="display:inline"></div>
</td></tr>
</table>
</main>

<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.html'); ?>

</body>
</html>
