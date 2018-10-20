<?php

use Phalcon\Mvc\Model;

class Tokens extends Model {
    
    public function initialize() {
        $this->setSource('user_token');
    }
    
}