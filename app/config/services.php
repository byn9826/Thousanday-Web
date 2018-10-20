<?php

use Phalcon\Mvc\View;
use Phalcon\Mvc\View\Engine\Php as PhpEngine;
use Phalcon\Mvc\Url as UrlResolver;
use Phalcon\Mvc\Model\Metadata\Memory as MetaDataAdapter;
use Phalcon\Session\Adapter\Files as SessionAdapter;
// use Phalcon\Flash\Direct as Flash;

$di->setShared('config', function () {
  return include APP_PATH . "/config/config.php";
});

$di->setShared('url', function () {
  $config = $this->getConfig();
  $url = new UrlResolver();
  $url->setBaseUri($config->application->baseUri);
  return $url;
});

$di->setShared('view', function () {
  $config = $this->getConfig();
  $view = new View();
  $view->setDI($this);
  $view->setViewsDir($config->application->viewsDir);
  $view->registerEngines([
    '.php' => PhpEngine::class
  ]);
  return $view;
});

$di->setShared('modelsMetadata', function () {
  return new MetaDataAdapter();
});

$di->setShared('db', function() {
  $config = $this->getConfig();
  $class = 'Phalcon\Db\Adapter\Pdo\\' . $config->database->adapter;
  $params = [
    'host'     => $config->database->host,
    'username' => $config->database->username,
    'password' => $config->database->password,
    'dbname'   => $config->database->dbname,
    'charset'  => $config->database->charset
  ];
  $connection = new $class( $params );
  return $connection;
});

/*
$di->set('flash', function () {
    return new Flash([
        'error'   => 'alert alert-danger',
        'success' => 'alert alert-success',
        'notice'  => 'alert alert-info',
        'warning' => 'alert alert-warning'
    ]);
});
*/

$di->setShared('session', function () {
    $session = new SessionAdapter();
    $session->start();
    return $session;
});
