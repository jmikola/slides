<?php

$mc = new MongoClient;
$collection = $mc->selectCollection('test', 'tailme');

for ($i = 0; ++$i; ) {
    $collection->insert(['x' => $i]);
    printf("Inserted: %d\n", $i);
    sleep(1);
}

