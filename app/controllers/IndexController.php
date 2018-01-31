<?php
use Phalcon\Assets\Filters\Cssmin;
use Jaybizzle\CrawlerDetect\CrawlerDetect;

class IndexController extends ControllerBase {

  public function indexAction() {
    
    $CrawlerDetect = new CrawlerDetect;
    if($CrawlerDetect->isCrawler()) {
      return $this->view->pick('ssr/public');
    }
    
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
      return json_encode($Moment->readPublicMoments($load));
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }

}

