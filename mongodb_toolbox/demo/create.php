<?php

$mc = new MongoClient;
$database = $mc->selectDB('test');
$database->dropCollection('tailme');
$database->createCollection(
    'tailme',
    [
        'capped' => true,
        'size' => 16777216, // 16 MiB
        'max' => 1000,
    ]
);
