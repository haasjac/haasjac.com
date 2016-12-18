<?php
$number = $_REQUEST["number"];
$response = "<nav>";
for ( $i = 0; $i < $number - 1; $i++) {
	echo $i;
	$response .= '<button id="navButton' . $i . '" onClick="setButtons(' . $i . ')"></button><br />
	<span id="NavCat' . $i . '" style="display:none"></span>
	<br />
	';
}
echo "fuck";
/*if ($number != 0) {
	$response .= '<button id="navButton' . $number - 1 . '" onClick="setButtons(' . $number - 1 . ')"></button><br />
	<span id="NavCat' . $number - 1 . '" style="display:none"></span>
	';
}*/
$response .= "</nav>";
echo $response;

//<button id="navButton0" onClick="setButtons(0)"></button><br />
//<span id="NavCat0" style="display:none"></span>
//<br />
?>
