<?php

require 'vendor/autoload.php';

$loop = React\EventLoop\Factory::create();
$socket = new React\Socket\Server($loop);
$clients = new SplObjectStorage();

$socket->on('connection', function ($conn) use ($clients) {
    $clients->attach($conn);

    $conn->on('data', function ($data) use ($clients, $conn) {
        foreach ($clients as $client) {
            if ($conn === $client) {
                continue;
            }

            $client->write($conn->getRemoteAddress().': '.$data);
        }
    });

    $conn->on('end', function () use ($clients, $conn) {
        $clients->detach($conn);
    });
});

$socket->listen(2014, '0.0.0.0');
$loop->run();

