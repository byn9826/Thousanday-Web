<?php

$router = $di->getRouter();

// Define your routes here
$router->add(
    "/",
    [
        "controller" => "index",
        "action"     => "index",
    ]
);

$router->notFound(
    [
        "controller" => "error",
        "action"     => "page404",
    ]
);

$router->handle();