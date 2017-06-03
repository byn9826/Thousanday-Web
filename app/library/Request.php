<?php

class Request {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //create relative request
    public function createPetRequest($sender, $receiver, $pet) {
        $time = date('Y-m-d H:i:s');
        $addQuery = 'INSERT INTO request (sender_id, receiver_id, pet_id, request_time) 
                     VALUES (:sender, :receiver, :pet, :time)';
        try {
            $addStmt = $this->db->prepare($addQuery);
            $addStmt->bindValue(':sender', $sender, PDO::PARAM_INT);
            $addStmt->bindValue(':receiver', $receiver, PDO::PARAM_INT);
            $addStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
            $addStmt->bindValue(':time', $time);
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