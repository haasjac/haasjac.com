// PRESETSUMMONER - GETS AND SETS FAVORITE SUMMONER

//GETS LEAGUE DATA FOR FAVORITE SUMMONER
function presetSummoner(def) {
	var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","PresetSummoner.php",true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	        if (xmlhttp.responseText != 0) {
	            user[def] = xmlhttp.responseText;
	            getSummonerName(def);
				getSummonerArray('fav');
				if (user.cur != "") getSummonerArray('cur');
				else {
					$("#SummonerIconcur").hide();
					$("#SummonerNamecur").hide();
					$("#Leaguecur").hide();
					$("#MiniSeriescur").hide();	
					$("#DefaultButton").hide();
				}
	        } else {
				$("#SummonerIcon" + def).hide();
				$("#SummonerName" + def).hide();
				$("#League" + def).hide();
				$("#MiniSeries" + def).hide();
				if (user.cur != "") getSummonerArray('cur');
				else {
					$("#SummonerIconcur").hide();
					$("#SummonerNamecur").hide();
					$("#Leaguecur").hide();
					$("#MiniSeriescur").hide();
					$("#DefaultButton").hide();
				}
	        }
		}
  	}
}

//SETS CURRENT SUMMONER AS FAVORITE SUMMONER - RELOADS PAGE
function setDefault() {
	var xmlhttp;
	var statusArr;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","PresetSummonerSet.php?name=" + user.cur,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			location.reload(true);
    	}
  	}
}

//UNSETS FAVORITE SUMMONER - RELOADS PAGE
function unsetDefault() {
	var xmlhttp;
	var statusArr;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","PresetSummonerSet.php?name=",true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			location.reload(true);
    	}
  	}
}