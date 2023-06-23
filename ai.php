<?php

$ch = curl_init();

$query = $_GET['q'];

curl_setopt($ch, CURLOPT_URL, "https://mfarels.my.id/api/openai?text=$query");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$output = curl_exec($ch);
curl_close($ch);
header('Content-Type: application/json; charset=utf-8');

echo $output;
