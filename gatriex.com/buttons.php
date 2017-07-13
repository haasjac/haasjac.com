<?php
include($_SERVER['DOCUMENT_ROOT'] . '/credentials.php');
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