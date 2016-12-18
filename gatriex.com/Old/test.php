<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wsoft";
$response = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully<br>";

$sql = "SELECT uniqname FROM amjunction";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $response .= "name: " . $row["uniqname"] . "<br>";
		//$response += "7 ";
    }
} else {
    echo "0 results";
}

echo $response;

$conn->close();
?>
