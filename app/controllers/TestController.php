<?php

use \DataTables\DataTable;

class TestController extends ControllerBase {

    public function indexAction() {
        // $db = $this->config->database;
        // $dump_output = shell_exec(
        //     "mysqldump --user=" . $db->username . " --password=" . $db->password . " " . $db->dbname . " > restoresync.sql"
        // );
        // echo $dump_output;
        // exit;
        // $config = $this->db;
        // var_dump($config);
        // $conn = mysql_connect($config->database->host, $config->database->username, $config->database->password);
        // mysql_select_db($config->database->dbname);
        // $mysql = 'set names utf8;\n';  
        // mysql_query($mysql); 
        // $tables = mysql_query('show tables');  
        // var_dump($tables);
        // exit;
        // while($t=mysql_fetch_array($tables)) {  
        //     $table = $t[0];  
        //     $mysql .= dump_table($table);  
        // }  
        // var_dump($mysql);
        // exit;
        
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