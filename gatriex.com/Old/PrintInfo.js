// PRINTINFO.JS - PRINTS INFORMATION FROM RIOT API TO WEBPAGE

//PRINTS SUMMONERICON SUMMONERNAME LEAGUE  AND MINISERIES(if applicable) FOR RANKED PLAYER
function printInfo() {
	var id = summonerArr[userNoSpace].id;
	var mini = "";
	document.getElementById("SummonerName").innerHTML = summonerArr[userNoSpace].name + "<br />";
	document.getElementById("League").innerHTML = leagueArr[id][0].tier + " " + leagueArr[id][0].entries[0].division + " " + leagueArr[id][0].entries[0].leaguePoints + "<br />";
	if (leagueArr[id][0].entries[0].miniSeries){
		mini = leagueArr[id][0].entries[0].miniSeries.progress;
		mini = mini.replace(/W/g,"O \t");
		mini = mini.replace(/N/g,"- \t");
		mini = mini.replace(/L/g,"X \t");
		document.getElementById("MiniSeries").innerHTML = mini + "<br />";
	} else {
		document.getElementById("MiniSeries").innerHTML = "<br />";
	}
	document.getElementById("SummonerIcon").setAttribute('src', "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/profileicon/" 
																  + summonerArr[userNoSpace].profileIconId + ".png");
	document.getElementById("Error").innerHTML = "";
	//document.getElementById("DefaultButton").innerHTML = '<button type="button" onClick="setDefault()">Set as Favorite</button>';
	//document.getElementById("Unfavorite").innerHTML = '<button type="button" onClick="unsetDefault()">Remove as Favorite</button>';
}

//PRINTS SUMMONERICON SUMMONERNAME AND LEVEL FOR UNRANKED PLAYER
function printInfoNoLeague() {
	document.getElementById("SummonerName").innerHTML = summonerArr[userNoSpace].name + "<br />";
	document.getElementById("League").innerHTML = "Summoner Level: " + summonerArr[userNoSpace].summonerLevel + "<br />";
	document.getElementById("MiniSeries").innerHTML = "<br />";
	document.getElementById("SummonerIcon").setAttribute('src', "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/profileicon/" 
																  + summonerArr[userNoSpace].profileIconId + ".png");
	document.getElementById("Error").innerHTML = "";
	//document.getElementById("DefaultButton").innerHTML = '<button type="button" onClick="setDefault()">Set as Favorite</button>';
	//document.getElementById("Unfavorite").innerHTML = '<button type="button" onClick="unsetDefault()">Remove as Favorite</button>';
}

//PRINTS ERROR CODES
function invalidSummoner(code) {
	
}