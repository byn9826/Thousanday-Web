<?php

use Phalcon\Cli\Task;

class MainTask extends Task {
    
    public function mainAction() {
        echo "Test console controller success" . PHP_EOL;
    }
    
}