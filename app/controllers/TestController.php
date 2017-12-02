<?php

use \DataTables\DataTable;

class TestController extends ControllerBase {

    public function indexAction() {
        var_dump(Monsters::getZodiac());
        exit;
    }
    
    public function readAction() {

    }

}