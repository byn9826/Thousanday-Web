<?php

use \DataTables\DataTable;

class TestController extends ControllerBase {

    public function indexAction() {
        // $this->assets->addCss('https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css', false);
        // $this->assets->addCss('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.css', false);
        // $this->assets->addJs('https://code.jquery.com/jquery-1.12.4.js', false);
        // $this->assets->addJs('https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js', false);
        // $this->assets->addJs('https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap4.min.js', false);
    }
    
    public function readAction() {
        // $builder = $this->modelsManager->createBuilder()
        //                   ->columns('pet_name')
        //                   ->from('Pets');

        // $dataTables = new DataTable();
        // $dataTables->fromBuilder($builder)->sendResponse();
    }

}