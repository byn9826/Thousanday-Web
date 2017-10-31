<?php

use Phalcon\Mvc\Model;

class Comments extends Model {
    
    public function initialize() {
        $this->setSource('moment_comment');
    }
    
}