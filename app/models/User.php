<?php

class User {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //* check if facebook id have registered
    public function checkFacebookId( $id ) {
        $facebookQuery = 'SELECT user_id, user_name FROM user WHERE facebook_id = :id';
        $facebookStmt = $this->db->prepare( $facebookQuery );
        $facebookStmt->bindValue( ':id', $id );
        $facebookStmt->execute();
        return $facebookStmt->fetch( PDO::FETCH_ASSOC );
    }

    //* check if google id have registered
    public function checkGoogleId($id) {
        $googleQuery = 'SELECT user_id, user_name FROM user WHERE google_id = :id';
        $googleStmt = $this->db->prepare($googleQuery);
        $googleStmt->bindValue(':id', $id);
        $googleStmt->execute();
        return $googleStmt->fetch(PDO::FETCH_ASSOC);
    }

    //* get owner name and relative name for one pet
    public function readPetFamily( $owner, $relative ) {
        $userQuery = 'SELECT user_id, user_name FROM user 
                      WHERE user_id = :owner OR user_id = :relative';
        $userStmt = $this->db->prepare( $userQuery );
        $userStmt->bindValue( ':owner', $owner );
        $userStmt->bindValue( ':relative', $relative );
        $userStmt->execute();
        return $userStmt->fetchAll( PDO::FETCH_ASSOC );
    }

    //* get user name from user id
    public function readUserName( $id ) {
        $userQuery = 'SELECT user_id, user_name FROM user WHERE user_id = :id';
        $userStmt = $this->db->prepare( $userQuery );
        $userStmt->bindValue( ':id', $id );
        $userStmt->execute();
        return $userStmt->fetch( PDO::FETCH_ASSOC );
    }

    //* return one user's information
    public function readOneUser( $id ) {
        $userQuery = 'SELECT user_id, user_name, user_about FROM user WHERE user_id = :id';
        $userStmt = $this->db->prepare( $userQuery );
        $userStmt->bindValue( ':id', $id, PDO::PARAM_INT );
        $userStmt->execute();
        return $userStmt->fetch( PDO::FETCH_ASSOC );
    }

    //* update user's name
    public function updateUserName( $id, $name ) {
        $userQuery = 'UPDATE user SET user_name = :name WHERE user_id = :id';
        $userStmt = $this->db->prepare( $userQuery );
        $userStmt->bindValue( ':id', $id, PDO::PARAM_INT );
        $userStmt->bindValue( ':name', $name, PDO::PARAM_STR );
        $userStmt->execute();
        return $userStmt->rowCount();
    }

    //* update user's about
    public function updateUserAbout( $id, $about ) {
        $userQuery = 'UPDATE user SET user_about = :about WHERE user_id = :id';
        $userStmt = $this->db->prepare( $userQuery );
        $userStmt->bindValue( ':id', $id, PDO::PARAM_INT );
        $userStmt->bindValue( ':about', $about, PDO::PARAM_STR );
        $userStmt->execute();
        return $userStmt->rowCount();
    }

    //* create new user for google login
    public function createGoogleUser( $google, $name ) {
        $addQuery = 'INSERT INTO user ( google_id, user_name, user_term ) 
                     VALUES ( :google, :name, 1 )';
        $addStmt = $this->db->prepare( $addQuery );
        $addStmt->bindValue( ':name', $name, PDO::PARAM_STR );
        $addStmt->bindValue( ':google', $google );
        $addStmt->execute();
        return $this->db->lastInsertId();
    }

    //* create user for fb login
    public function createFacebookUser( $facebook, $name ) {
        $addQuery = 'INSERT INTO user ( facebook_id, user_name, user_term ) 
                     VALUES ( :facebook, :name, 1 )';
        $addStmt = $this->db->prepare( $addQuery );
        $addStmt->bindValue( ':name', $name, PDO::PARAM_STR );
        $addStmt->bindValue( ':facebook', $facebook );
        $addStmt->execute();
        return $this->db->lastInsertId();
    }

}