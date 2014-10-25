<?php

require __DIR__ . '/vendor/autoload.php';

$loop = React\EventLoop\Factory::create();
$process = new React\ChildProcess\Process('mongo');

$stdout = new React\Stream\Stream(fopen('php://stdout', 'w'), $loop);

$process->on('exit', function($exitCode, $termSignal) use ($stdout) {
    echo "MongoDB shell exited\n";
    $stdout->close();
});

$loop->addTimer(0.001, function($timer) use ($process, $stdout) {
    $process->start($timer->getLoop());

    $process->stdout->pipe($stdout);
});

$loop->addTimer(1, function($timer) use ($process) {
    $process->stdin->write("db.foo.drop();\n");
    $process->stdin->write("db.foo.insert({ x: 1 });\n");
    $process->stdin->write("db.foo.insert({ x: 2 });\n");
    $process->stdin->write("db.foo.insert({ x: 3 });\n");
    $process->stdin->write("db.foo.find().sort({ x: -1 });\n");
    $process->stdin->write("exit\n");
});

$loop->run();
