<?php

$router = $di->getRouter(false);

$router->addGet("/api/learn/read", ["controller" => "learn", "action" => "read"]);
$router->addPost("/api/learn/update", ["controller" => "learn", "action" => "update"]);
$router->addGet("/api/skill/read", ["controller" => "skill", "action" => "read"]);
$router->addPost("/api/skill/build", ["controller" => "skill", "action" => "build"]);
$router->addPost("/api/upload/skill", ["controller" => "upload", "action" => "skill"]);

$router->addPost("/api/account/google", ["controller" => "account", "action" => "google"]);
$router->addPost("/api/account/facebook", ["controller" => "account", "action" => "facebook"]);
$router->addPost("/api/account/logout", ["controller" => "account", "action" => "logout"]);

$router->addGet("/api/index/read", ["controller" => "index", "action" => "read"]);
$router->addGet("/api/explore/read", ["controller" => "explore", "action" => "read"]);

$router->addGet("/api/pet/read", ["controller" => "pet", "action" => "read"]);
$router->addGet("/api/pet/load", ["controller" => "pet", "action" => "load"]);
$router->addPost("/api/pet/watch", ["controller" => "pet", "action" => "watch"]);
$router->addPost("/api/upload/moment", ["controller" => "upload", "action" => "moment"]);

$router->addGet("/api/user/read", ["controller" => "user", "action" => "read"]);
$router->addPost("/api/user/load", ["controller" => "user", "action" => "load"]);

$router->addGet("/api/moment/read", ["controller" => "moment", "action" => "read"]);
$router->addPost("/api/moment/delete", ["controller" => "moment", "action" => "delete"]);
$router->addPost("/api/moment/like", ["controller" => "moment", "action" => "like"]);
$router->addPost("/api/moment/comment", ["controller" => "moment", "action" => "comment"]);
$router->addGet("/api/moment/load", ["controller" => "moment", "action" => "load"]);

$router->addGet("/api/watch/read", ["controller" => "watch", "action" => "read"]);
$router->addPost("/api/watch/remove", ["controller" => "watch", "action" => "remove"]);
$router->addPost("/api/watch/add", ["controller" => "watch", "action" => "add"]);
$router->addPost("/api/watch/load", ["controller" => "watch", "action" => "load"]);

$router->addGet("/api/request/read", ["controller" => "request", "action" => "read"]);
$router->addPost("/api/request/accept", ["controller" => "request", "action" => "accept"]);
$router->addPost("/api/request/delete", ["controller" => "request", "action" => "delete"]);

$router->addGet("/api/setting/read", ["controller" => "setting", "action" => "read"]);
$router->addPost("/api/setting/name", ["controller" => "setting", "action" => "name"]);
$router->addPost("/api/setting/about", ["controller" => "setting", "action" => "about"]);
$router->addPost("/api/upload/user", ["controller" => "upload", "action" => "user"]);

$router->addPost("/api/upload/add", ["controller" => "upload", "action" => "add"]);
$router->addGet("/api/edit/read", ["controller" => "edit", "action" => "read"]);
$router->addPost("/api/edit/name", ["controller" => "edit", "action" => "name"]);
$router->addPost("/api/upload/pet", ["controller" => "upload", "action" => "pet"]);
$router->addGet("/api/edit/search", ["controller" => "edit", "action" => "search"]);
$router->addPost("/api/edit/add", ["controller" => "edit", "action" => "add"]);
$router->addPost("/api/edit/remove", ["controller" => "edit", "action" => "remove"]);
$router->addPost("/api/edit/transfer", ["controller" => "edit", "action" => "transfer"]);
$router->addPost("/api/edit/end", ["controller" => "edit", "action" => "end"]);

$router->addPost("/api/upload/create", ["controller" => "upload", "action" => "create"]);

$router->handle();