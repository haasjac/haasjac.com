//myScript.js

//GLOBAL VARIABLES
var data = [];
var ready = false;
var spells = [];


//GETS DATA FROM RIOT API. CALLED WHEN PAGE LOADS
function getData() {
	//DISABLE CALCULATION UNTIL LOADED
	document.getElementById("calculate").disabled = true;
	document.getElementById("text").innerHTML = "<br>Loading...";
	
	//CALL RIOT API
	$.get("Call.php?url=https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=spells", function(text, status){
		data = jQuery.parseJSON(text).data;
		for (var champ in data) {
			var name = data[champ].name;
			var spellsarr = data[champ].spells;
			for (var i = 0; i < spellsarr.length; i++) {
				var thisspell = {attackdamage:0, spelldamage:0, cooldown:spellsarr[i].cooldown[spellsarr[i].cooldown.length - 1], champion:name, spellnum:i, key:champ};
				if (spellsarr[i].vars) {
					for (var j = 0; j <spellsarr[i].vars.length; j++) {
						if (spellsarr[i].vars[j]["link"] == "spelldamage" || spellsarr[i].vars[j]["link"] == "attackdamage") {
							thisspell[spellsarr[i].vars[j]["link"]] += spellsarr[i].vars[j].coeff[spellsarr[i].vars[j].coeff.length - 1] * 100.0;
						}
					}
					thisspell.attackdamage /= 100.0;
					thisspell.spelldamage /= 100.0;
				}
				spells.push(thisspell);
			}
		}
		
		//ENABLE CALCULATION
		document.getElementById("text").innerHTML = "<br>";
		document.getElementById("calculate").disabled = false;
		ready = true;
	});
}


//CALCULATES EFFICIENCY AND DISPLAYS TOP 5 SPELLS. CALLED WHEN CALCULATE BUTTON IS CLICKED
function processSpells(ap,ad,cdr) {
	var check = true;
	document.getElementById("text").innerHTML = "<br>";
	
	//CHECK IF INPUTS ARE VALID
	if (!ready) {
		document.getElementById("text").innerHTML += "Loading, please try again.";
		check = false;
	}
	if (ap > 1000 || ap < 0) {
		document.getElementById("text").innerHTML += "Please enter an Ability Power between 0 and 1000. <br>";
		$("#table").hide();
		check = false;
	}
	if (ad > 1000 || ad < 0) {
		document.getElementById("text").innerHTML += "Please enter an Attack Damage between 0 and 1000. <br>";
		$("#table").hide();
		check = false;
	}
	if (cdr > 0.40 || cdr < 0) {
		document.getElementById("text").innerHTML += "Please enter an Cooldown Reduction between 0.00 and 0.40. <br>";
		$("#table").hide();
		check = false;
	}
	if(!check)
		return;
	$("#table").show();
	
	//CALCULATE EFFICIENCY
	var text = "";
	for (var i = 0; i < spells.length; i++) {
		spells[i].adtext = Math.round(100 * (spells[i].attackdamage * ad)) / 100;
		spells[i].aptext = Math.round(100 * (spells[i].spelldamage * ap)) / 100;
		spells[i].cdrtext = Math.round(100 * (spells[i].cooldown * (1 - cdr))) / 100;
		if (spells[i].cdrtext == 0)
			spells[i].totaltext = 0;
		else
			spells[i].totaltext =  Math.round(100 * (spells[i].adtext + spells[i].aptext) / spells[i].cdrtext) / 100;
	}
	
	//SORT
	spells.sort(function(a, b) {return b.totaltext - a.totaltext});
	if (spells[0].totaltext == 0) {
		spells.sort(function(a, b) {return a.cdrtext - b.cdrtext});
	}
	
	//DISPLAY TOP 5 SPELLS IN TABLE
	for (i = 0; i < 5; i++) {
		var letter = (spells[i].spellnum == 0 ? "Q" : (spells[i].spellnum == 1 ? "W" : (spells[i].spellnum == 2 ? "E" : "R")));
		document.getElementById("tdi" + i).innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/5.23.1/img/spell/" + data[spells[i].key].spells[spells[i].spellnum].image.full + "' >";
		document.getElementById("tdt" + i).innerHTML = "<span style='font-weight: bold;'>" + spells[i].champion + " " + letter + ": " 
			+ data[spells[i].key].spells[spells[i].spellnum].name + "</span><br>"
			+ data[spells[i].key].spells[spells[i].spellnum].sanitizedDescription;
		document.getElementById("tde" + i).innerHTML = "<span style='font-weight: bold;'>Efficiency: " + spells[i].totaltext + "</span><br>"
			+ "ad:" + spells[i].adtext 
			+ "<br>ap: " + spells[i].aptext 
			+ "<br>cdr: " + spells[i].cdrtext;
	}
}