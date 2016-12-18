	var xmlhttp;
	var versionArr;
	var version;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","test.php",true);
	xmlhttp.send();
	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("test").innerHTML = xmlhttp.responseText;
    	}
  	}
