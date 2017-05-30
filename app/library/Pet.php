<?php

class Pet {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

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

}