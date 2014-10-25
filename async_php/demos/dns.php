<?php

require 'vendor/autoload.php';

$loop = React\EventLoop\Factory::create();
$factory = new React\Dns\Resolver\Factory();
$dns = $factory->create('8.8.8.8', $loop);

$dns
    ->resolve($argv[1])
    ->then(
        function ($ip) { echo "Host: $ip\n"; },
        function ($e) { echo "Error: {$e->getMessage()}\n"; }
    );

$loop->run();