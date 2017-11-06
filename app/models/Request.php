<?php

class Request {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //* read one user's all request
    public function readUserRequests( $user, $load ) {
        $pin = $load * 10;
        $readQuery = 'SELECT * FROM request WHERE receiver_id = :user 
                      ORDER BY request_time DESC LIMIT :pin, 20';
        $readStmt = $this->db->prepare( $readQuery );
        $readStmt->bindValue( ':user', $user, PDO::PARAM_INT );
        $readStmt->bindValue( ':pin', $pin, PDO::PARAM_INT );
        $readStmt->execute();
        return $readStmt->fetchAll( PDO::FETCH_ASSOC );
    }

    //create relative request
    public function createPetRequest( $sender, $receiver, $pet ) {
        $time = date( 'Y-m-d H:i:s' );
        $addQuery = 'INSERT INTO request ( sender_id, receiver_id, pet_id, request_time ) 
                     VALUES ( :sender, :receiver, :pet, :time )';
        $addStmt = $this->db->prepare( $addQuery );
        $addStmt->bindValue( ':sender', $sender, PDO::PARAM_INT );
        $addStmt->bindValue( ':receiver', $receiver, PDO::PARAM_INT );
        $addStmt->bindValue( ':pet', $pet, PDO::PARAM_INT );
        $addStmt->bindValue( ':time', $time );
        $addStmt->execute();
        return $addStmt->rowCount();
    }

    //* delete request based on one user
    public function deleteUserRequest( $receiver, $pet ) {
        $removeQuery = 'DELETE FROM request WHERE pet_id = :pet AND receiver_id = :receiver';
        $removeStmt = $this->db->prepare( $removeQuery );
        $removeStmt->bindValue( ':receiver', $receiver, PDO::PARAM_INT );
        $removeStmt->bindValue( ':pet', $pet, PDO::PARAM_INT );
        $removeStmt->execute();
        return $removeStmt->rowCount();
    }

}