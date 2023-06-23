<?php
$ch = curl_init();
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$shortlink = $_GET['link'];

[$string, $id] = explode("ws/", $shortlink);
curl_setopt($ch, CURLOPT_URL, "https://tools.revanar.dev/check.php?u=$id");
curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$output = curl_exec($ch);
$output = json_decode($output);
$output = (array)$output;
curl_close($ch);
$status_output = $output['leaked'];
header('Content-Type: application/json; charset=utf-8');
if ($status_output) {
    $data_terlacak = json_decode($output['data']);
    $data_terlacak = (array)$data_terlacak;
    $tanggal = $data_terlacak['at'];
    $detail_data = (array)$data_terlacak['data'];
    $latitude = $detail_data['latitude'];
    $longitude = $detail_data['longitude'];
    $ip = $detail_data['ip'];
    $user_agent_leak = $detail_data['user agent'];
    $link_map = $detail_data['map'];

    $result = [
        'status'        => true,
        'tanggal'       => $tanggal,
        'latitude'      => $latitude,
        'longitude'     => $longitude,
        'ip'            => $ip,
        'user_agent'    => $user_agent_leak,
        'link_map'      => $link_map
    ];


    echo json_encode($result);

    return null;
}

echo json_encode([
    'status' => false,
    'message' => 'Not leaked'
]);
