<?php
include($_SERVER['DOCUMENT_ROOT'] . '/credentials.php');

$response = array();
$headers = array();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT text, link, header FROM Links";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if (!isset($headers[$row["header"]]) {
            $headers[$row["header"]] = array();
        }
        $item = array();
        $item["text"] = $row["text"]; 
        $item["link"] = $row["link"];
        array_push($headers[$row["header"]], $item);
    }
}

for ($headers as $key => $value) {
    $category = array();
    $category["header"] = $key;
    $category["items"] = $value;
    array_push($response, $category);
}

echo json_encode($response);
$conn->close();
?>
