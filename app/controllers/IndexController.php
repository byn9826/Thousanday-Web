<?php
use byn9826\FakeSSR\FakeSSR;

class IndexController extends ControllerBase {

  public function indexAction() {
    $cache_folder = dirname(__dir__) . '/.ssr';
    FakeSSR::detect($cache_folder);
    include(dirname(dirname(__dir__)) . '/frontend/index.html');
  }
  
  
  //* read 20 most recent public moments
  public function readAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
    $load = (int) $this->request->get('load');
    try {
      $db = DbConnection::getConnection();
      $Moment = new Moment($db);  
      return json_encode($Moment->readPublicMoments($load));
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }

}

