<?php

use Phalcon\Mvc\Model;

class Users extends Model {
    
    public function initialize() {
        $this->setSource('user');
    }
    
    public function getAccountType() {
        switch ($this->user_type) {
            case '1':
                return "Admin";
            default:
                return "Normal";
        }
    }
    
}