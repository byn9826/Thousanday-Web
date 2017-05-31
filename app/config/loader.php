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
        'Like' => __DIR__ . '/../library/Like.php',
        'Pet' => __DIR__ . '/../library/Pet.php',
        'Watch' => __DIR__ . '/../library/Watch.php',
        'User' => __DIR__ . '/../library/User.php',
        'Comment' => __DIR__ . '/../library/Comment.php',
        'Token' => __DIR__ . '/../library/Token.php',
        'Secret' => __DIR__ . '/../library/Secret.php'
    ]
);

$loader->register();

require_once(__DIR__ . '/../../vendor/google-api/vendor/autoload.php');