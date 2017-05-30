<?php

class Like {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //create like from one user to one moment
    public function createUserLike($moment, $user) {
        $addQuery = 'INSERT INTO moment_like (moment_id, user_id) VALUES (:moment, :user)';
        try {
            $addStmt = $this->db->prepare($addQuery);
            $addStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
            $addStmt->bindValue(':user', $user, PDO::PARAM_INT);
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

    //delete like from one user to one moment
    public function deleteUserLike($moment, $user) {
        $delQuery = 'DELETE FROM moment_like WHERE moment_id = :moment AND user_id = :user';
        try {
            $delStmt = $this->db->prepare($delQuery);
            $delStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
            $delStmt->bindValue(':user', $user, PDO::PARAM_INT);
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

    //get all user id like one moment
    public function readMomentLikes($id) {
        $momentQuery = 'SELECT user_id FROM moment_like WHERE moment_id = :id';
        try {
            $momentStmt = $this->db->prepare($momentQuery);
            $momentStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $momentStmt->execute();
            return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

}