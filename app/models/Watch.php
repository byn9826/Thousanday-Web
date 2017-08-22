<?php

class Watch {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //read all watcher for one pet
    public function readPetWatchs($pet) {
        $watchQuery = 'SELECT user_id FROM pet_watch WHERE pet_id = :pet';
        try {
            $watchStmt = $this->db->prepare($watchQuery);
            $watchStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
            $watchStmt->execute();
            return $watchStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //read one user's all pets watch
    public function readUserWatchs($user) {
        $watchQuery = 'SELECT pet_id FROM pet_watch WHERE user_id = :user';
        try {
            $watchStmt = $this->db->prepare($watchQuery);
            $watchStmt->bindValue(':user', $user, PDO::PARAM_INT);
            $watchStmt->execute();
            return $watchStmt->fetchAll(PDO::FETCH_NUM);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //add new watch for pet
    //create like from one user to one moment
    public function createUserWatch($pet, $user) {
        $addQuery = 'INSERT INTO pet_watch (pet_id, user_id) VALUES (:pet, :user)';
        try {
            $addStmt = $this->db->prepare($addQuery);
            $addStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
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

    //delete watch for one pet
    public function deleteUserWatch($pet, $user) {
        $delQuery = 'DELETE FROM pet_watch WHERE pet_id = :pet AND user_id = :user';
        try {
            $delStmt = $this->db->prepare($delQuery);
            $delStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
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

}