<?php

use Phalcon\Mvc\Model;

class Moments extends Model {
    
    public function initialize() {
        $this->setSource('moment');
    }
    
}