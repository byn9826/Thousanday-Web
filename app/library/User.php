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

    //check if google id have registered
    public function checkGoogleId($id) {
        $googleQuery = 'SELECT user_id, user_name FROM user WHERE google_id = :id';
        try {
            $googleStmt = $this->db->prepare($googleQuery);
            $googleStmt->bindValue(':id', $id);
            $googleStmt->execute();
            return $googleStmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

}