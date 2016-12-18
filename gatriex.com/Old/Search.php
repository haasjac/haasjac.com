<?php
	if (empty($_GET)) {
		echo ""; /*"<script>","getVersion();","presetSummoner('fav');","</script>";*/
	} else {
		$Summoner_Name = strval($_GET["SummonerName"]);
		echo $Summoner_name;/*"<script>","getVersion();","presetSummoner('fav');","getSummoner('$Summoner_Name');","</script>";*/
	}
?>