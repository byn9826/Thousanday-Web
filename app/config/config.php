<?php

//Define base path and app folder path
defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');
require_once(__DIR__ . '/../library/DbConnection.php');

return new \Phalcon\Config([
    //Define path for MVC
    'application' => [
        'appDir'         => APP_PATH . '/',
        'controllersDir' => APP_PATH . '/controllers/',
        'viewsDir'       => APP_PATH . '/views/',
        'modelsDir'      => APP_PATH . '/models/',
        'libraryDir'     => APP_PATH . '/library/',
        'baseUri'        => preg_replace('/public([\/\\\\])index.php$/', '', $_SERVER["PHP_SELF"]),
    ],
    //Define params for Mysql
    'database' => [
        'adapter'     => 'Mysql',
        'username'    => DbConnection::$_username,
        'password'    => DbConnection::$_password,
        'dbname'      => DbConnection::$_dbname,
        'charset'     => 'utf8'
     ],
     'appName' => 'Smilings'
]);
