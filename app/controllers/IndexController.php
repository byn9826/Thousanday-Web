<?php
use Phalcon\Assets\Filters\Cssmin;
use byn9826\FakeSSR\FakeSSR;

class IndexController extends ControllerBase {

  public function indexAction() {
    
    FakeSSR::detect(
      'https://smilings.me',
      dirname(__dir__) . '/.ssr',
      false
    );
    
    $this->assets->collection('header')
      ->setTargetPath('../public/production/public.css')
      ->addCss('../public/css/globe.css')
      ->addCss('../public/css/general.css')
      ->addCss('../public/css/public.css')
      ->setTargetUri('/../production/public.css')
      ->join(true)->addFilter(new Cssmin());
    try {
      $redis = new Predis\Client();
      if ($redis->exists("data-public")) {
        $this->view->data = $redis->get('data-public');
      } else {
        $db = DbConnection::getConnection();
        $Moment = new Moment($db);
        $moments = json_encode($Moment->readPublicMoments(0));
        $redis->set('data-public', $moments);
        $this->view->data = $moments;
      }
    } catch (Exception $e) {
      return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

  //* read 20 most recent public moments
  public function readAction() {
    $load = (int) $this->request->get('load');
    try {
      $db = DbConnection::getConnection();
      $Moment = new Moment($db);                   
      $this->response->setHeader('Access-Control-Allow-Origin', '*');
      $this->response->setHeader('Access-Control-Allow-Headers', 'X-Requested-With');      
      $this->response->sendHeaders();
      return json_encode($Moment->readPublicMoments($load));
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }

}

