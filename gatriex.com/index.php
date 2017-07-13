<html>

<head>
<title>Gatriex</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="/images/favicon.ico">
<link rel="stylesheet" type="text/css" href="/Gatriex.css">
<!-- SCRIPTS - LOADS IN JAVASCRIPT FILES -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">
</script>
<script src="/Script.js">
</script>
</head>


<!--START BODY-->
<body onLoad="onStartupHome()">
<div id="test"></div>
<header>
<table id="headtable">
<tr>
<!-- MYDATE -->
<td>
<div id="myDate"></div>
</td>
<!-- LOGIN -->
<td>
<div id="login">
<form action="/register/" class="Login" method="get" style="display:inline">
	<table class="Login"><tr><td>
	<input class="Login" placeholder="username" type="text" size="15" name="username">
    </td><td>
    <input class="Login" placeholder="password" type="password" size="15" name="password">
    </td><td>
    <button class="Login" type="submit">Log In</button><br>
    </td></tr><tr><td>
    <input class="Login" type="checkbox" name="remember" value="Remember"><span class="Login">Remember me</span>
    </td><td>
    <a href="/register/">forgot password?</a>
    </td><td>
    <a href="/register/">register</a>	
    </td></tr></table>
</form>
</div>
</td>
<!--<button id="refresh" onClick="getURL()">refresh</button>-->
</tr>
</table>
</header>


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

<footer>
<!-- NAVIGATION -->
<a href="/" class="style1">HOME</a> | <a href="/about" class="style1">ABOUT</a>
<!-- CREATIVE COMMONS -->
<div class="Creative">
<br /><br />
This work is licensed under a <a class="Creative" rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
</div>
<!--<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" style="float:right" width="60" height="20"></a>-->
<br />
<div style="font-size:12px">
Gatriex isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.
<br /> 
League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
</div>
</footer>

</body>
</html>
