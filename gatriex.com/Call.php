<?php
include($_SERVER['DOCUMENT_ROOT'] . '/credentials.php');
$url = $_REQUEST["url"].$api_token;
//echo $url;
$curl = curl_init();
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt_array($curl, array(
	CURLOPT_URL => $url,
	CURLOPT_RETURNTRANSFER => 1
));

$result = curl_exec($curl);
$key = curl_error($curl);
$keyx = curl_errno($curl);

curl_close($curl);
echo $result;
?>