// SCRIPT.JS - DECLARES VARIABLES AND RUNS STARTUP FUNCTIONS

//INITIALIZE VARIABLES
var user;
var userNoSpace;
var summonerArr;
var leagueArr;
var version;
var region;
var navButtonArrows = [ "&#9654", "&#9654", "&#9654", "&#9654", "&#9654", "&#9654"];
var navButtonNames;
var navigation = {length: {0:0}, Name: {0:""}, linkName: {0:""}};
//var tryreload = true;

	

//CALLS ALL FUNCTIONS THAT NEED TO RUN WHEN PAGE LOADS
function onStartupHome() {
	getURL();
	setInterval("getURL()",5*60*1000);
	getButtons();
	myDate();
}

function onStartupAbout() {
	//getStatus();
	//getButtons();
	myDate();
}

function getURL() {
	var selected = { br:"", eune:"", euw:"", kr:"", lan:"", las:"", na:"", oce:"", ru:"", tr:""};
	var value = '';
	
	var urlRegion = getURLVariable('region');
	if (urlRegion != "") {
		region = urlRegion;
		selected[region] = "selected";
	} else {
		region = "na";
		selected["na"] = "selected";
	}
	
	
	//LEAGUE INFO
	var urlName = getURLVariable("SummonerName");
	if (urlName == "") {
		document.getElementById("League").innerHTML = "<br>Welcome to Gatriex!";
		document.getElementById("SummonerIcon").setAttribute('src', "/images/Logo.png");
	} else {
		value = 'value = "' + urlName + '"'
		setURL("Version");
		$.get("Call.php?url=" + url, function(text, status){
			version = jQuery.parseJSON(text)[0];
		});
		user = urlName;
		var userNoSpaceArr = user.split(" ");
		userNoSpace = "";
		var index;
		for (index = 0; index < userNoSpaceArr.length; index++) {
			userNoSpace += userNoSpaceArr[index];
		}
		userNoSpace = userNoSpace.toLowerCase();
		setURL("Name");
		
		//LEAGUE INFO
		$.get("Call.php?url=" + url, function(text, status){
			if (text.slice(0,8) === '{"status') {
				invalidSummoner(jQuery.parseJSON(text).status.status_code);
			} else {
				if (text.slice(0,userNoSpace.length + 2) === '{"' + userNoSpace) {
					summonerArr = jQuery.parseJSON(text);
					setURL("League");
					$.get("Call.php?url=" + url, function(text, status){
						if (text) {
							if (text.slice(0,8) === '{"status') {
								if (jQuery.parseJSON(text).status.status_code == 404){
									document.getElementById("SummonerName").innerHTML = "ERROR:";
									document.getElementById("League").innerHTML = "Cannot find Summoner: " + user + "<br /><br />";
								} else if (jQuery.parseJSON(text).status.status_code == 429) {
									document.getElementById("SummonerName").innerHTML = "ERROR:";
									document.getElementById("League").innerHTML = "Too many Summoners requesting data.";
									document.getElementById("MiniSeries").innerHTML = "Try again later. <br /><br />";
								} else {
									console.log(jQuery.parseJSON(text).status.status_code);
									document.getElementById("Error").innerHTML = "ERROR:<br>" +
									"Cannot find/refresh data at this time. Sorry for the inconvenience. <br /><br />";
								}
							} else {
								leagueArr = jQuery.parseJSON(text);	
								var id = summonerArr[userNoSpace].id;
								var mini = "";
								document.getElementById("SummonerName").innerHTML = summonerArr[userNoSpace].name + "<br />";
								document.getElementById("League").innerHTML = leagueArr[id][0].tier + " " 
																				+ leagueArr[id][0].entries[0].division + " " 
																				+ leagueArr[id][0].entries[0].leaguePoints + "<br />";
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
							}
						} else {
							document.getElementById("SummonerName").innerHTML = summonerArr[userNoSpace].name + "<br />";
							document.getElementById("League").innerHTML = "Summoner Level: " + summonerArr[userNoSpace].summonerLevel + "<br />";
							document.getElementById("MiniSeries").innerHTML = "<br />";
							document.getElementById("SummonerIcon").setAttribute('src', "http://ddragon.leagueoflegends.com/cdn/" + version + "/img/profileicon/" 
																						  + summonerArr[userNoSpace].profileIconId + ".png");
							document.getElementById("Error").innerHTML = "";
						}
					});
				} else {
					document.getElementById("SummonerName").innerHTML = "ERROR:";
					document.getElementById("League").innerHTML = "Cannot find Summoner: " + user + "<br /><br />";
				}
			}
		});
	}
	
	document.getElementById("Search").innerHTML = 
	'<form action="" method="get" style="display:inline">' +
		'<input class="Search" size="15" placeholder="Summoner Name" ' + value + ' type="text" name="SummonerName">' +
		'<button class="Search" type="submit">Search</button>' +
		'<select class="Search" onchange="this.form.submit()" name="region">' +
			'<option ' + selected.br + ' value="br">BR</option>' +
			'<option ' + selected.eune + ' value="eune">EUNE</option>' +
			'<option ' + selected.euw + ' value="euw">EUW</option>' +
			'<option ' + selected.kr + ' value="kr">KR</option>' +
			'<option ' + selected.lan + ' value="lan">LAN</option>' +
			'<option ' + selected.las + ' value="las">LAS</option>' +
			'<option ' + selected.na + ' value="na">NA</option>' +
			'<option ' + selected.oce + ' value="oce">OCE</option>' +
			'<option ' + selected.ru + ' value="ru">RU</option>' +
			'<option ' + selected.tr + ' value="tr">TR</option>' +
		'</select>' +
	'</form>';
	
	//STATUS
	if (region == "kr") {
		document.getElementById("Status").innerHTML = "Server Status not available for KR";
	} else {
		$.get("http://status.leagueoflegends.com/shards/" + region, function(text, status){
			if (status == "success") {
				document.getElementById("Status").innerHTML = text.name + " - " + text.services[1].status;
				var incidentText = "<ul>";
				for (j = 0; j < 4; j++) {
					if (j>0) incidentText += "<br>";
					incidentText += "<li>";
					incidentText += text.services[j].name + " - " + text.services[j].status;
					incidentText += "</li>";
					incidentText += "<ol>";
					for (i = 0; i < text.services[j].incidents.length; i++) {
						if (text.services[j].incidents[i].updates[0]) {
							incidentText += "<li>";
							incidentText += text.services[j].incidents[i].updates[0].content;
							incidentText += "</li>";
							if (i < text.services[j].incidents.length -1) incidentText += "<br />";
						}
					}
					incidentText += "</ol>";
				}
				incidentText += "</ul>";
				document.getElementById("Incidents").innerHTML = incidentText;
			}
			else {
				document.getElementById("statuscell").innerHTML = "Error loading Status";
				console.log(status);
			}
		});
	}
}

//DECODES VARIABLES IN URL
function getURLVariable( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else 
    return results[1].replace("+"," ");
}

//SETS URL FOR API CALL
function setURL(category) {
	if (category === "Name") {
		url = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + userNoSpace + "?api_key=";
	} else if (category === "League") {
		url = "https://" + region + ".api.pvp.net/api/lol/" + region + "/v2.5/league/by-summoner/" + summonerArr[userNoSpace].id + "/entry?api_key=";
	} else if (category === "Version") {
		url = "https://" + region + ".api.pvp.net/api/lol/static-data/" + region + "/v1.2/versions?api_key=";
	} else {
		
	}
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

//INITIALIZES NAVBUTTONS
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

//TOGGLES NAVBUTTONS
function setButtons(i) {
	if (navButtonArrows[i] == "&#9660") navButtonArrows[i] = "&#9654";
	else  navButtonArrows[i] = "&#9660";
	document.getElementById("navButton" + i).innerHTML = /*"<span style='text-decoration:none>'" +*/ navButtonArrows[i] + " " +/*"</span> " +*/ navButtonNames[i];
	$("#NavCat" + i).slideToggle();	
}