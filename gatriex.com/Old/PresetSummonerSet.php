<?php
$summoner = $_REQUEST["name"];
$cookie_name = "summonername";
setcookie($cookie_name,$summoner,time() + 86400*365,"/");
?>