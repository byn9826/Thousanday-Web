<?php

class IndexController extends ControllerBase {

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

