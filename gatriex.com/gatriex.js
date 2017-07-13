//global variables
var version;
var summonerData;
var leagueData;
var navButtonArrows = [ "&#9654", "&#9654", "&#9654", "&#9654", "&#9654", "&#9654"];
var navButtonNames;
var navigation = {length: {0:0}, Name: {0:""}, linkName: {0:""}};

//On load
$(function () {
	getButtons();
	myDate();
});

function getURL() {	
	
	//LEAGUE INFO
	var urlName = "Gatriex";//getURLVariable("SummonerName");
	if (urlName == "") {
		document.getElementById("League").innerHTML = "<br>Welcome to Gatriex!";
		document.getElementById("SummonerIcon").setAttribute('src', "/images/Logo.png");
	} else {
		value = 'value = "' + urlName + '"'
		setURL("Version");
		
		$.ajax({
			url: "Call.php?url=https://na1.api.riotgames.com/lol/static-data/v3/versions?api_key=";
			success: function(data) {
				version = $.parseJSON(data)[0];
				console.log(version);
			},
			error: function(xhr, status, error) {
				console.log(error);
			}
		});
		
		$.ajax({
			url: "Call.php?url=https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + userNoSpace + "?api_key=";
			success: function(data) {
				summonerData = $.parseJSON(data);
				console.log(summonerData);
			},
			error: function(xhr, status, error) {
				console.log(error);
			}
		});
		
		$.ajax({
			url: "https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/" + summonerData.id + "?api_key=";
			success: function(data) {
				leagueData = $.parseJSON(data);
				console.log(leagueData);
			},
			error: function(xhr, status, error) {
				console.log(error);
			}
		});
}

//gets navigation buttons
function getButtons() {
	$.get("buttons.php", function(text, status){
		if (status == "success") {
			navButtonNames = jQuery.parseJSON(text);
			for (i = 0; i < navButtonNames.length; i++) {
				document.getElementById("navButton" + i).innerHTML =  navButtonArrows[i] + " " + navButtonNames[i];
				document.getElementById("navButton" + i).style.display = "inline";
				$("#NavCat" + i).load("links.php?table=" + navButtonNames[i].toLowerCase());
			}
		} else {
			document.getElementById("navcell").innerHTML = "Error loading links";
			console.log(status);
		}
	});	
}

//UPDATES DATE EVERY SECOND
function myDate() {
	var d = new Date();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var mod;
	var hour;
	var minutes;
	if (d.getMinutes() < 10) {
		minutes = "0" + d.getMinutes();	
	} else {
		minutes = d.getMinutes();	
	}
	if (d.getHours() == 0) {
		hour = 12;
		mod = "AM"
	} else if (d.getHours()<=11) {
		hour = d.getHours();
		mod = "AM"
	} else if (d.getHours() == 12) {
		hour = 12;
		mod = "PM";
	} else {
		hour = d.getHours()	- 12;
		mod = "PM";
	}
	document.getElementById("myDate").innerHTML = '<a href="/"><img src="/images/Logo.png" width="100" height="100" /></a> ' + days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + " " + hour + ":" + minutes + " " + mod;
	setTimeout("myDate()",1000);
}

//TOGGLES NAVBUTTONS
function setButtons(i) {
	if (navButtonArrows[i] == "&#9660") navButtonArrows[i] = "&#9654";
	else  navButtonArrows[i] = "&#9660";
	document.getElementById("navButton" + i).innerHTML = /*"<span style='text-decoration:none>'" +*/ navButtonArrows[i] + " " +/*"</span> " +*/ navButtonNames[i];
	$("#NavCat" + i).slideToggle();	
}