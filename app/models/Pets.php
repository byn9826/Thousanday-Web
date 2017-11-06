<?php

use Phalcon\Mvc\Model;

class Pets extends Model {
    
    public function initialize() {
        $this->setSource('pet');
    }
    
    public function getGenderName() {
        switch($this->pet_gender) {
            case 0:
                return 'Male';
            case 1:
                return 'Female';
        }
    }
    
    public function getTypeName() {
        switch($this->pet_type) {
            case 0:
                return "dog";
            case 1:
                return "cat";
            case 2:
                return "bird";
            case 3:
                return "fish";
            case 4:
                return "other";
        }
    }
    
    public function getNatureName() {
        switch ($this->pet_nature) {
            case 0:
                return "cute";
            case 1:
                return "strong";
            case 2:
                return "smart";
            case 3:
                return "beauty";
        }
    }
    
}