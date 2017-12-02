<?php

use \DataTables\DataTable;

class TestController extends ControllerBase {

    public function indexAction() {
        var_dump(DbConnection::$_username);
        exit;
    }
    
    public function readAction() {

    }

}