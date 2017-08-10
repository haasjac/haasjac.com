//global variables
var urlName = "Gatriex";
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
	setInterval(getVersion(), 60000); // 1 min
	setInterval(getStatus(), 300000); // 5 min
});

function getVersion() {
	$.ajax({
		url: "Call.php?url=https://na1.api.riotgames.com/lol/static-data/v3/versions?api_key=",
		//url: "Call.php?url=https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/versions?api_key=",
		success: function(data) {
			version = data[0];
			getId();
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});
};

function getId() {
	$.ajax({
		url: "Call.php?url=https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + urlName + "?api_key=",
		success: function(data) {
			summonerData = $.parseJSON(data);
			getData();
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});
};

function getData() {
	$.ajax({
		url: "Call.php?url=https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/" + summonerData.id + "?api_key=",
		success: function(data) {
			leagueData = $.parseJSON(data);
			displayData();
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});
}

function getStatus() {
	$.ajax({
		url: "Call.php?url=https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=",
		success: function(data) {
			data = $.parseJSON(data);
			$("#Status").html(data.name);
			var incidentText = "<ul>";
			for (j = 0; j < data.services.length; j++) {
				if (j>0) incidentText += "<br>";
				incidentText += "<li>" +
									data.services[j].name + " - " + data.services[j].status +
								"</li>" +
								"<ol>";
				for (i = 0; i < data.services[j].incidents.length; i++) {
					if (data.services[j].incidents[i].updates[0]) {
						incidentText += "<li>" +
											data.services[j].incidents[i].updates[0].content +
										"</li>";
						if (i < data.services[j].incidents.length -1) incidentText += "<br />";
					}
				}
				incidentText += "</ol>";
			}
			incidentText += "</ul>";
			$("#Incidents").html(incidentText);
		},
		error: function(xhr, status, error) {
			console.log(error);
		}
	});
}

function displayData() {
	var mini = "";
	if (leagueData[0].miniSeries){
		mini = leagueData[0].miniSeries.progress;
		mini = mini.replace(/W/g,"O \t");
		mini = mini.replace(/N/g,"- \t");
		mini = mini.replace(/L/g,"X \t");
	}
	$("#MiniSeries").html(mini);
	$("#SummonerName").html(summonerData.name);
	$("#SummonerIcon").attr("src", "https://ddragon.leagueoflegends.com/cdn/" + version + "/img/profileicon/" + summonerData.profileIconId + ".png");
	$("#League").html(leagueData[0].tier + " " + leagueData[0].rank + " " + leagueData[0].leaguePoints);
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
	var mod = (d.getHours() < 12 ? "AM" : "PM");
	var hour = (d.getHours() % 12 == 0 ? 12 : d.getHours() % 12);
	var minutes = ((d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes());
	$("#myDate").html(days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + " " + hour + ":" + minutes + " " + mod);
	setTimeout("myDate()",1000);
}

//TOGGLES NAVBUTTONS
function setButtons(i) {
	if (navButtonArrows[i] == "&#9660") navButtonArrows[i] = "&#9654";
	else  navButtonArrows[i] = "&#9660";
	document.getElementById("navButton" + i).innerHTML = /*"<span style='text-decoration:none>'" +*/ navButtonArrows[i] + " " +/*"</span> " +*/ navButtonNames[i];
	$("#NavCat" + i).slideToggle();	
}
