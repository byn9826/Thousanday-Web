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

    //get all pets belong to owner and relative, except current pet
    public function readPetFriends($owner, $relative, $pet) {
        $familyQuery = 'SELECT pet_id, pet_name FROM pet WHERE
                        (owner_id = :owner OR relative_id = :owner OR owner_id = :relative 
                        OR relative_id = :owner) AND pet_id != :pet';
        try {
            $familyStmt = $this->db->prepare($familyQuery);
            $familyStmt->bindValue(':owner', $owner, PDO::PARAM_INT);
            $familyStmt->bindValue(':relative', $relative, PDO::PARAM_INT);
            $familyStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
            $familyStmt->execute();
            return $familyStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //get all pets belong to one user
    public function readUserPets($owner, $pet) {
        $userQuery = 'SELECT pet_id, pet_name FROM pet WHERE owner_id = :owner AND pet_id != :pet';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':owner', $owner, PDO::PARAM_INT);
            $userStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
            $userStmt->execute();
            return $userStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //find pets list fit in certain type and nature
    public function readFilterPets($type, $nature) {
        $userQuery = 'SELECT pet_id FROM pet WHERE pet_type = :type AND pet_nature = :nature';
        try {
            $userStmt = $this->db->prepare($userQuery);
            $userStmt->bindValue(':type', $type, PDO::PARAM_INT);
            $userStmt->bindValue(':nature', $nature, PDO::PARAM_INT);
            $userStmt->execute();
            return $userStmt->fetchAll(PDO::FETCH_NUM);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

}