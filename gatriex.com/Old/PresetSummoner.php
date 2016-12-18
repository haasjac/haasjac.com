<?php
$cookie_name = "summonername";
if (!isset($_COOKIE[$cookie_name])) {
	echo 0;
} else {
	echo $_COOKIE[$cookie_name];
}
?>