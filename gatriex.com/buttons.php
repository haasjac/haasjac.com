<?php
$servername = "localhost";
$username = "haasjacc_root";
$password = "trumpet77697";
$dbname = "haasjacc_gatriex";
$response = array();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name FROM buttons";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	$i = 0;
    while($row = $result->fetch_assoc()) {
        $response[$i] = $row["name"];
		$i++;
    }
}
echo json_encode($response);

$conn->close();
?>