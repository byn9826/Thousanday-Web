<?php

class TestController extends ControllerBase {

  public function indexAction() {
    $CrawlerDetect = new CrawlerDetect;
    if($CrawlerDetect->isCrawler()) {
      
    }
    return $this->view->pick('ssr/public');
  }

  public function readAction() {

  }

}