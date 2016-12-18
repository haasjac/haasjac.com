<html>

<!-- HEAD - CONTAINS SCRIPTS PHP TITLE AND FILE LINKS -->
<head>
<title>Gatriex: Register</title>
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
</nav>
</td>


<!-- SECTION - CONTAINS STATUS, SEARCH, AND LEAGUE INFO -->

<td id="searchcell">
<!-- SEARCH-->
<form action="test.php" method="get" style="display:inline">
	<input placeholder="username" type="text" name="username">
    <input placeholder="password" type="password" name="password">
    <input placeholder="email" type="text" name="email">
    <button type="submit">Register</button><br>
</form>
<br>
The Login Function is currently being worked on.
<br><br>
What you see is place holder. 
<br><br>
You cannot register an account or login at this time.
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

