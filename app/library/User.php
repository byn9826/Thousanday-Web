<?php

class User {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //check if facebook id have registered
    public function checkFacebookId($id) {
        $facebookQuery = 'SELECT user_id, user_name FROM user WHERE facebook_id = :id';
        try {
            $facebookStmt = $this->db->prepare($facebookQuery);
            $facebookStmt->bindValue(':id', $id);
            $facebookStmt->execute();
            return $facebookStmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

}