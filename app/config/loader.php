<?php

$loader = new \Phalcon\Loader();

//Load Controller and Model
$loader->registerDirs(
    [
        $config->application->controllersDir,
        $config->application->modelsDir,
    ]
);

//Load Libraries
$loader->registerClasses(
    [
        'DbConnection' => __DIR__ . '/../library/DbConnection.php',
        'Secret' => __DIR__ . '/../library/Secret.php',
        'Skills' => __DIR__ . '/../library/Skills.php'
    ]
);

$loader->register();

//Auto Load from composer
require_once( __DIR__ . '/../../vendor/autoload.php' );