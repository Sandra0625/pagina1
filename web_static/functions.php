<?php
function load_site_data(){
    $dataFile = __DIR__ . '/../api/data/site.json';
    if(!file_exists($dataFile)) return null;
    $json = file_get_contents($dataFile);
    return json_decode($json, true);
}

function esc($s){
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}
