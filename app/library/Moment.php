<?php

class Moment {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //read 20 public moments from the pin point, return moment list
    //return 0 for error
    public function readPublicMoments($load) {
        $momentQuery = 'SELECT moment_id, pet_id, image_name, moment_message FROM moment ORDER BY moment_id DESC LIMIT :pin, 20';
        try {
            $momentStmt = $this->db->prepare($momentQuery);
            $momentStmt->bindValue(':pin', $load * 20, PDO::PARAM_INT);
            $momentStmt->execute();
            return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }


}