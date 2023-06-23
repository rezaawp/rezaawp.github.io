<?php

$ch = curl_init();
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$link_target = $_GET['link'];

curl_setopt($ch, CURLOPT_URL, "https://tools.revanar.dev/generate.php");
curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "link=$link_target");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$output = curl_exec($ch);
$output = json_decode($output);
$output = (array)$output;
curl_close($ch);
$shortlink = $output['link'];

$result['shortlink'] = $shortlink;

header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);
