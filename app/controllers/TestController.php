<?php

class TestController extends ControllerBase {

  public function indexAction() {
    

    $url = 'https://smilings.me'; 
    //The folder used to cache rendered HTML, could be null if $expire is 0
    $cache_folder = dirname(__dir__) . '/.ssr';  
    //Cache expiring time. Default value is false, means never expire. 0 means never use cache. 
    //1 means cache for 1 min, 10 means cache for 10 min, 100 means cache for 100 min, etc
    $expire = 0;
    
    FakeSSR::detect($url, $cache_folder, $expire);
    exit;
    
    var_dump(123);
    exit;
  }

}