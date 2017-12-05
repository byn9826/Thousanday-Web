<?php

use Phalcon\Cli\Task;

class ApiTask extends Task {
    
  public function mainAction() {
    
    $server = new swoole_http_server("127.0.0.1", 9501);
    
    $server->on('request', function (swoole_http_request $request, swoole_http_response $response) {
      $method = $request->server['request_method'];
      if($method === 'GET') {
        $params = isset($request->get) ? $request->get : [];
      } else {
        if($request->header['content-type'] === 'application/json') {
          $params = json_decode($request->rawContent(), true);
        } else if ($request->header['content-type'] === 'application/x-www-form-urlencoded') {
          $params = isset($request->post) ? $request->post : [];
        }
      }
      
      $path_info = explode('/', $request->server['path_info']);
      if(empty($path_info)){
        $response->status(400);
        $response->end("Invalid Path Info");
      }

      $action = isset($path_info[2]) && !empty($path_info[2]) ? $path_info[2] : null;
      
      switch ($action) {
        case 'skills':
          if ($method === 'GET') {
            $response->header('Content-Type', 'application/json; charset=utf-8');
            $response->end(json_encode(Skills::$all));
          }
          break;
        default:
          $response->status(404);
          $response->end("Page Not Found");
          break;
      }

    });
      
    $server->start();
  }

}



//       $file = __DIR__ . $request->server['path_info'];
//       if(is_file($file)) {
//         $body = include "$file";
//       } else {
//         $body = "<html><h1>Hello Swoole!</h1></html>";
//       }
//       $response->end($body);
      
//$response->end(var_dump(Monsters::getZodiac()));