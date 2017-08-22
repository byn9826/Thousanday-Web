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

    //verify user token
    //return 1 for valid
    //return 0 for db error
    //return 2 for not valid
    public function checkUserToken($id, $token) {
        $checkQuery = 'SELECT user_id FROM user_token WHERE user_token = :token';
        try {
            $checkStmt = $this->db->prepare($checkQuery);
            $checkStmt->bindValue(':token', $token, PDO::PARAM_STR);
            $checkStmt->execute();
            $userId = $checkStmt->fetch(PDO::FETCH_ASSOC);
            if ((int) $userId['user_id'] === $id) {
                return 1;
            } else {
                return 2;
            }
        } catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //remove user token
    public function deleteUserToken($id, $token) {
        $delQuery = 'DELETE FROM user_token WHERE user_id = :id AND user_token = :token';
        try {
            $delStmt = $this->db->prepare($delQuery);
            $delStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $delStmt->bindValue(':token', $token, PDO::PARAM_STR);
            $this->db->beginTransaction();
            $delStmt->execute();
            $this->db->commit();
            return 1;
        } catch (PDOException $e) {
            print $e->getMessage();
            $this->db->rollback();
            return 0;
        }
    }

}