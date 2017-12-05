<?php

use Phalcon\Di\FactoryDefault\Cli as CliDI;
use Phalcon\Cli\Console as ConsoleApp;
use Phalcon\Loader;

$di = new CliDI();

$loader = new Loader();
$loader->register();
$loader->registerDirs(
    [
        __DIR__ . "/tasks",
        __DIR__ . "/models",
    ]
);
$loader->registerClasses(
    [
        'DbConnection' => __DIR__ . '/library/DbConnection.php',
        'Secret' => __DIR__ . '/library/Secret.php',
        'Skills' => __DIR__ . '/library/Skills.php',
        'Monsters' => __DIR__ . '/library/Monsters.php'
    ]
);
$loader->register();

$configFile = __DIR__ . "/config/config.php";
if (is_readable($configFile)) {
    $config = include $configFile;
    $di->set("config", $config);
}

$console = new ConsoleApp();
$console->setDI($di);
$arguments = [];
foreach ($argv as $k => $arg) {
    if ($k === 1) {
        $arguments["task"] = $arg;
    } elseif ($k === 2) {
        $arguments["action"] = $arg;
    } elseif ($k >= 3) {
        $arguments["params"][] = $arg;
    }
}

try {
    $console->handle($arguments);
} catch (\Phalcon\Exception $e) {
    echo $e->getMessage();
    exit(255);
}