<?php

use \DataTables\DataTable;

class TestController extends ControllerBase {

    public function indexAction() {
        var_dump(Pets::find());
        exit;
    }
    
    public function readAction() {

    }

}