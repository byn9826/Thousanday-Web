<?php

class Pet {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //read data for one pet
    public function readOnePet($id) {
        $petQuery = 'SELECT * FROM pet WHERE pet_id = :id';
        try {
            $petStmt = $this->db->prepare($petQuery);
            $petStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $petStmt->execute();
            return $petStmt->fetch(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //get owner id and relative id of one pet
    public function readPetFamily($id) {
        $familyQuery = 'SELECT owner_id, relative_id FROM pet WHERE pet_id = :id';
        try {
            $familyStmt = $this->db->prepare($familyQuery);
            $familyStmt->bindValue(':id', $id, PDO::PARAM_INT);
            $familyStmt->execute();
            return $familyStmt->fetch(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //get all pets belong to owner and relative
    public function readUsersPets($owner, $relative) {
        $familyQuery = 'SELECT pet_id, pet_name, pet_gender FROM pet WHERE
                        owner_id = :owner OR relative_id = :owner OR owner_id = :relative 
                        OR relative_id = :owner';
        try {
            $familyStmt = $this->db->prepare($familyQuery);
            $familyStmt->bindValue(':owner', $owner, PDO::PARAM_INT);
            $familyStmt->bindValue(':relative', $relative, PDO::PARAM_INT);
            $familyStmt->execute();
            return $familyStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }



}