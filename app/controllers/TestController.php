<?php
use JonnyW\PhantomJs\Client;

class TestController extends ControllerBase {

  public function indexAction() {
    FakeSSR::detect(
      'https://smilings.me',
      dirname(__dir__) . '/.ssr',
      false,
      dirname(__dir__) . '/bin/phantomjs'
    );
    
//     $client = Client::getInstance();
//     $client->getEngine()->setPath(dirname(__dir__) . '/bin/phantomjs')->debug(true);
//     $client->isLazy();
//     //$client->getEngine()->setPath('/bin')->debug(true);
//     $request  = $client->getMessageFactory()->createRequest();
//     $request->setTimeout(2000);
//     $response = $client->getMessageFactory()->createResponse();
//     $request->setMethod('GET');
//     $request->setUrl('https://smilings.me');
//     $client->send($request, $response);
//     if($response->getStatus() === 200) {
//       echo $response->getContent();
//     }
    exit;
  }

  public function readAction() {

  }

}