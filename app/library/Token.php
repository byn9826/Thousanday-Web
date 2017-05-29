<?php

class Token {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //create token for logged in users
    //return 1 for success
    //return 0 for error
    public function createUserToken($id, $token, $keep) {
        $addQuery = 'INSERT INTO user_token (user_id, user_token, keep) 
                     VALUES (:id, :token, :keep) 
                     ON DUPLICATE KEY UPDATE user_token = :token';
        try {
            $addStmt = $this->db->prepare($addQuery);
            $addStmt->bindValue(':id', $id);
            $addStmt->bindValue(':token', $token, PDO::PARAM_STR);
            $addStmt->bindValue(':keep', $keep);
            $this->db->beginTransaction();
            $addStmt->execute();
            $this->db->commit();
            return 1;
        } catch (PDOException $e) {
            print $e->getMessage();
            $this->db->rollback();
            return 0;
        }
    }


}