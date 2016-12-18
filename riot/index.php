<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">
</script>
<script src="myScript.js">
</script>
<link rel="stylesheet" type="text/css" href="mycss.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Spell Calculator</title>
</head>

<body onload="getData()">
<form>
<span style="font-weight:bold; font-size:20px;">League of Legends</span>
<br />
<span style="font-weight:bold; font-size:26px;">Spell Efficiency Calculator</span>
<br /><br />
Ability Power (0-1000): <input type="number" min="0" max="1000" placeholder="0" name="ap" />
Attack Damage (0-1000): <input type="number" min="0" max="1000" placeholder="0" name="ad" />
Cooldown Reduction (0.00-0.40): <input type="number" min="0" max="0.40" step="0.01" placeholder="0.00" name="cdr" />
<input id="calculate" type="button" onclick="processSpells(ap.value,ad.value,cdr.value)" value="Calculate" />
<br /><br />
<a href="about.html">How is this calculated?</a>
<div id="text"></div>
</form>
<br />
<table style="display:none;" id="table">
    <tr>
        <td class="lefttd" id="tdi0">
        </td>
        <td class="centertd" id="tdt0">
        </td>
        <td class="righttd" id="tde0">
        </td>
    </tr>
    <tr>
        <td class="lefttd" id="tdi1">
        </td>
        <td class="centertd" id="tdt1">
        </td>
        <td class="righttd" id="tde1">
        </td>
    </tr>
    <tr>
        <td class="lefttd" id="tdi2">
        </td>
        <td class="centertd" id="tdt2">
        </td>
        <td class="righttd" id="tde2">
        </td>
    </tr>
    <tr>
        <td class="lefttd" id="tdi3">
        </td>
        <td class="centertd" id="tdt3">
        </td>
        <td class="righttd" id="tde3">
        </td>
    </tr>
    <tr>
        <td class="lefttd" id="tdi4">
        </td>
        <td class="centertd" id="tdt4">
        </td>
        <td class="righttd" id="tde4">
        </td>
    </tr>
</table>
</body>
</html>
