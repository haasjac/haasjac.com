<?php

$servername = "localhost";
$username = "haasjacc_root";
$password = "trumpet77697";
$dbname = "haasjacc_gatriex";
$table = urldecode( $_REQUEST["table"] );
$response = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, link FROM " . $table;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$response .= '<a href="' . $row["link"] . '" target="_blank" class="style1" > &emsp;&emsp;' . $row["name"] . '</a><br /><br />';
    }
}
echo $response;
$conn->close();
?>