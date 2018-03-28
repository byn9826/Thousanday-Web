<?php
use byn9826\FakeSSR\FakeSSR;

class TestController extends ControllerBase {

  public function indexAction() {
    
    FakeSSR::detect(
      'https://smilings.me',
      dirname(__dir__) . '/.ssr',
      0
    );

  }

}