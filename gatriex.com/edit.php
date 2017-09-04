<!doctype html>
<html lang="en">
<head>
    <title>Edit</title>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/overcast/jquery-ui.css" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="shortcut icon" href="/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/Gatriex.css">
    <style>
        #container {
            list-style-type: none;
            margin: 0;
            padding: 0;
            //width: 60%;
        }
        .category {
            padding: 10px;
        }
        .ui-state-highlight {
            padding: 10px;
        }
        .category ul {
            list-style-type: none;
            margin: 0;
            padding-left: 25px;
            //width: 60%;
        }

        .category li {
            padding: 10px;
            //height: 18px;
        }

        .list {
            padding: 5px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="/edit.js"></script>
</head>

<body>
<header>
<table id="headtable">
<tr>
<td>
<span><a href="/"><img src="/images/Logo.png" width="100" height="100" /></a></span>
<div id="myDate"></div>
</td>
</tr>
</table>
</header>

<div id="main">

	<div>
	Edit Bookmarks
	</div>
	
	<div style="padding:20px;">
		<div>
			<form id="form">
				<ul id="container">
				</ul>
				<br />
				<div>
					<button type="button" id="add_button" class="ui-button addCategoryButton">Add Category</button>
					<input class="ui-button" type="submit" value="Save Changes"/>
				</div>
			</form>
		</div>

		<div id="error-message" title="Error">
			<p id="error"></p>
			<button class="ui-button" id="show_error-details">show details</button>
			<p id="error-details" style="display:none"></p>
		</div>
	</div>
</div>

<footer>
<div style="font-size:12px">
Gatriex.com isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.
<br /> 
League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
</div>
</footer>

</body>
</html>