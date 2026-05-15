<?php
header('Content-Type: application/json; charset=utf-8');
$dataFile = __DIR__ . '/data/site.json';
if (file_exists($dataFile)) {
    echo file_get_contents($dataFile);
    exit;
}
http_response_code(404);
echo json_encode(["error" => "data not found"]);
