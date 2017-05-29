<?php

$loader = new \Phalcon\Loader();

$loader->registerDirs(
    [
        $config->application->controllersDir
    ]
);

$loader->registerClasses(
    [
        'DbConnection' => __DIR__ . '/../library/DbConnection.php',
        'Moment' => __DIR__ . '/../library/Moment.php',
        'User' => __DIR__ . '/../library/User.php',
        'Secret' => __DIR__ . '/../library/Secret.php'
    ]
);

$loader->register();