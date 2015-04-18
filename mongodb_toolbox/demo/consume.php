<?php

$mc = new MongoClient;
$collection = $mc->selectCollection('test', 'tailme');

$cursor = $collection->find();
$cursor->tailable(true);
$cursor->awaitData(true);

while (true) {
    if ($cursor->dead()) {
        break;
    }

    if ( ! $cursor->hasNext()) {
        continue;
    }

    printf("Consumed: %d\n", $cursor->getNext()['x']);
}
