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

    //get owner name and relative name for one pet
    public function readPetFamily($owner, $relative) {
        $userQuery = 'SELECT user_id, user_name FROM user WHERE user_id = :owner OR user_id = :relative';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':owner', $owner);
            $userStmt->bindValue(':relative', $relative);
            $userStmt->execute();
            return $userStmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //get user name from user id
    public function readUserName($id) {
        $userQuery = 'SELECT user_id, user_name FROM user WHERE user_id = :id';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':id', $id);
            $userStmt->execute();
            return $userStmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //get one users information
    public function readOneUser($id) {
        $userQuery = 'SELECT user_id, user_name, user_about FROM user WHERE user_id = :id';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $userStmt->execute();
            return $userStmt->fetch(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //update user's name
    public function updateUserName($id, $name) {
        $userQuery = 'UPDATE user SET user_name = :name WHERE user_id = :id';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $userStmt->bindValue(':name', $name, PDO::PARAM_STR);
            $this->db->beginTransaction();
            $userStmt->execute();
            $this->db->commit();
            return 1;
        } catch (PDOException $e) {
            print $e->getMessage();
            $this->db->rollback();
            return 0;
        }
    }

    //update user's about
    public function updateUserAbout($id, $about) {
        $userQuery = 'UPDATE user SET user_about = :about WHERE user_id = :id';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $userStmt->bindValue(':about', $about, PDO::PARAM_STR);
            $this->db->beginTransaction();
            $userStmt->execute();
            $this->db->commit();
            return 1;
        } catch (PDOException $e) {
            print $e->getMessage();
            $this->db->rollback();
            return 0;
        }
    }

}